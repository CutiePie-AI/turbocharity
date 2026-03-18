export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Amplitude tracking will be configured after deployment */}
      </head>
      <body>{children}</body>
    </html>
  );
}
