"use client";
import { useEffect, useState } from "react";
import TokenContext from "@contexts/TokenContext";

export default function ContextProvider({ children }) {
  useEffect(() => {
    // Check if token is in cookie
    const token = document.cookie.split(";").find((cookie) => cookie.includes("token"));
    if (token) {
      setToken(token.split("=")[1]);
    }
  }, []);

  const [token, setToken] = useState(null);
  return <TokenContext.Provider value={{ token, setToken }}>{children}</TokenContext.Provider>;
}
