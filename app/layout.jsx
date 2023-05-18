import "@styles/globals.css";
import { Outfit } from "next/font/google";
import Nav from "@components/Nav";
import QueryClientProviderComponent from "@components/QueryClientProviderComponent";
import ContextProvider from "@components/ContextProvider";
import CustomToastContainer from "@components/CustomToastContainer";
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
        <QueryClientProviderComponent>
          <ContextProvider>
            <CustomToastContainer />
            <div className="app">
              <Nav />
              <main className="w-full">{children}</main>
            </div>
          </ContextProvider>
        </QueryClientProviderComponent>
      </body>
    </html>
  );
}
