"use client";
import Loader from "@components/Loader";
import ProfilePictureUploader from "@components/ProfilePictureUploader";
import AuthContext from "@contexts/AuthContext";
import axios from "axios";
import { Edit } from "lucide-react";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { auth, setAuth } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (!auth.user) {
      router.push("/");
    }
  }, [auth]);

  async function updateUsername(username) {
    const res = await axios.post("/api/user/update-user", {
      username,
      email: auth.user.email,
    });
    if (res.status === 200) {
      setAuth({
        ...auth,
        user: {
          ...auth.user,
          username,
        },
      });
    }
  }
  return (
    <section className="top_section mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 lg:px-12">
      {auth?.user ? (
        <>
          <h1 className="gradient_text text-7xl leading-snug">Your Profile</h1>
          {auth?.user?.username ? (
            <h2 className="text-5xl">{auth?.user?.username}</h2>
          ) : (
            <div
              onClick={() => {
                const username = prompt("Enter your username");
                if (username) {
                  updateUsername(username);
                }
              }}
              className="flex cursor-pointer items-center justify-center gap-4">
              <h2 className="text-5xl">Choose your username</h2>
              <Edit className="mt-2" />
            </div>
          )}
          <h3 className="text-3xl">Member since: {new Date(auth?.user?.createdAt).toLocaleDateString()}</h3>
          <h3 className="text-3xl">{auth?.user?.email}</h3>
          <ProfilePictureUploader />
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
}
