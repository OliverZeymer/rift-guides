import { connectToDB } from "@utils/database";
import cloudinary from "cloudinary";
import User from "@models/user.model";

export async function POST(req) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

  await connectToDB();
  const { image, email } = await req.json();
  try {
    const imageUrl = await cloudinary.uploader.upload(image);
    console.log(imageUrl);
    const setUserProfilePicture = await User.findOneAndUpdate({ email }, { profilePicture: imageUrl.secure_url });
    return new Response(JSON.stringify({ success: true, message: "Profile picture updated successfully.", data: setUserProfilePicture }));
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: "Profile picture update failed." }));
  }
}
