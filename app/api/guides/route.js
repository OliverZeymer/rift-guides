import Guide from "@models/guide.model";
import { connectToDB } from "@utils/database";

export async function GET(req) {
  await connectToDB();
  try {
    const guides = await Guide.find();
    return new Response(
      JSON.stringify({
        success: true,
        guides,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 500,
    });
  }
}
