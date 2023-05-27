import User from "@models/user.model";
import { connectToDB } from "@utils/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await connectToDB();
  const { email, password } = await req.json();
  if (!email || !password) {
    return new Response(JSON.stringify({ success: false, message: "Missing email or password" }), {
      status: 400,
    });
  }

  try {
    const user = await User.findOne({ email }).select("password");
    if (!user) {
      return new Response(JSON.stringify({ success: false, message: "User not found" }), {
        status: 404,
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return new Response(JSON.stringify({ success: false, message: "Invalid credentials" }), {
        status: 401,
      });
    }

    const newToken = jwt.sign({ email }, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });
    console.log(newToken);

    return new Response(
      JSON.stringify({
        success: true,
        message: "User authenticated successfully",
        token: newToken,
        expiresIn: 3600,
        user: {
          email,
          id: user._id,
        },
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
