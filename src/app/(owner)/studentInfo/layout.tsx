export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo/logo.svg" />
      <body >
        {children}
      </body>
    </html>
  );
}
