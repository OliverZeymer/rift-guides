"use client";

import { createContext } from "react";

export const TokenContext = createContext({});

export default function TokenProvider({ children }) {
  return <TokenContext.Provider value="">{children}</TokenContext.Provider>;
}
