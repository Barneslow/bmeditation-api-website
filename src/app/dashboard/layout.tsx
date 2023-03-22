import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="h-full pt-20 pb-10">{children}</section>;
}
