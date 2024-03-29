import React from "react";
import "./globals.css";

export const metadata = {
  title: "Alive Cor",
  description: "Alive Cor Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex,nofollow" />
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>

      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
