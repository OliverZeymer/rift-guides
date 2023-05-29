"use client";
import { useEffect, useState } from "react";
import AuthContext from "@contexts/AuthContext";
import { getCookie, setCookie } from "react-use-cookie";
import axios from "axios";
import { toast } from "react-toastify";

export default function ContextProvider({ children }) {
  const [auth, setAuth] = useState(false);
  console.log(auth);
  async function checkToken() {
    const CookieToken = getCookie("token");
    if (CookieToken) {
      const res = await axios.get("/api/auth/verifytoken", {
        headers: {
          Authorization: `Bearer ${CookieToken}`,
        },
      });
      if (res.status === 200) {
        setAuth({
          token: CookieToken,
          user: res?.data?.user,
        });
      } else {
        setAuth(false);
        setCookie("token", "", { days: 0 });
        toast.error("An error occurred while logging in.");
      }
    }
  }

  useEffect(() => {
    checkToken();
  }, []);
  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
}
