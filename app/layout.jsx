import "@styles/globals.css";

import { Outfit } from "next/font/google";
import Nav from "@components/Nav";
import QueryClientProviderComponent from "@components/QueryClientProviderComponent";
import TokenProvider from "@components/TokenProvider";
export const metadata = {
  title: "Rift-Guides",
  description: "Discover & Share League of Legends Guides",
};
const outfit = Outfit({
  display: "swap",
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <div className="app">
          <QueryClientProviderComponent>
            <TokenProvider>
              <Nav />
              <main className="w-full">{children}</main>
            </TokenProvider>
          </QueryClientProviderComponent>
        </div>
      </body>
    </html>
  );
}
