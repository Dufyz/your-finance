import { Toaster } from "sonner";
import "../styles/globals.css";
import { UserProvider } from "@/providers/userProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>YourFinance</title>
      </head>
      <UserProvider>
        <body>
          <Toaster position="top-right" closeButton />
          <div>{children}</div>
        </body>
      </UserProvider>
    </html>
  );
}
