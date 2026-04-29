import "../styles.css";
import "../framework.css";
import "../profile.css";
import "./next.css";

export const metadata = {
  title: "Prasanna Chaurasia | Studio Console",
  description:
    "Architecture portfolio of Prasanna Chaurasia: conceptual futures, BIM workflows, real projects, research, visual storytelling, and source portfolio PDFs."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
