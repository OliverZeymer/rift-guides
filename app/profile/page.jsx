"use client";
import ProfilePictureUploader from "@components/ProfilePictureUploader";
import TokenContext from "@contexts/TokenContext";
import { useContext } from "react";
import { useQuery } from "react-query";

export default function Profile() {
  const { token, setToken } = useContext(TokenContext);
  const { data, isLoading, error } = useQuery(["profile"], async () => {
    const response = await fetch(`/api/auth/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token.toString()}`,
      },
    });
    const userData = await response.json();
    return userData;
  });
  return (
    <section className="top_section mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 lg:px-12">
      <h1 className="gradient_text text-7xl leading-snug">Your Profile</h1>
      <ProfilePictureUploader />
      <h3 className="text-3xl">{data?.user.email}</h3>
    </section>
  );
}
