export const metadata = {
  title: 'MinistryMotion Studio',
  description: 'Content management for MinistryMotion',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
