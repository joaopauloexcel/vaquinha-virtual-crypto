import "./globals.css";

export const metadata = {
  title: "Vaquinha Virtual Crypto",
  description: "Sistema de arrecadação BNB",
  charSet: "utf-8"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width:device-width, initial-scale=1" />
      </head>
      <body className="bg-light w-100">{children}</body>
    </html>
  );
}
