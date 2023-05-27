"use client";
import { useEffect, useState } from "react";
import TokenContext from "@contexts/TokenContext";
import { getCookie } from "react-use-cookie";

export default function ContextProvider({ children }) {
  const [token, setToken] = useState(null);
  useEffect(() => {
    // Check if token is in cookie
    const CookieToken = getCookie("token");
    if (CookieToken) {
      setToken({
        token: CookieToken,
      });
    }
  }, []);
  return <TokenContext.Provider value={{ token, setToken }}>{children}</TokenContext.Provider>;
}
