import "@styles/globals.css";
import Nav from "@components/Nav";
import QueryClientProviderComponent from "@components/QueryClientProviderComponent";
export const metadata = {
  title: "Rift-Guides",
  description: "Discover & Share League of Legends Guides",
};
export default function RootLayout({ children }) {
  return (
    <QueryClientProviderComponent>
      <html lang="en">
        <body>
          <div className="app">
            <Nav />
            <main className="w-full">{children}</main>
          </div>
        </body>
      </html>
    </QueryClientProviderComponent>
  );
}
