import jwt from "jsonwebtoken";
import User from "@models/user.model";
import { connectToDB } from "@utils/database";

export async function GET(req, { params }) {
  await connectToDB();

  try {
    // Verify and decode the token
    const decodedToken = jwt.verify(params.token, process.env.TOKEN_SECRET);

    // Retrieve the user account using the email from the decoded token
    const user = await User.findOne({ email: decodedToken.email });

    if (!user) {
      return new Response(JSON.stringify({ success: false, message: "User not found" }), {
        status: 404,
      });
    }

    // Return the user account data
    return new Response(JSON.stringify({ success: true, data: user }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: "Invalid token" }), {
      status: 401,
    });
  }
}
