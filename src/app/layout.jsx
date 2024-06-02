// [layout.jsx]
import "./globals.css";
import SideNav from "@/app/components/sideNav";
import SideEditor from "@/app/components/sideEditor";
import SectionTitle from "./components/SectionTitle";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900">
        <div className="flex h-screen w-screen flex-col md:flex-row md:overflow-hidden">
          <SideNav />
          <div className="flex-grow p-6 md:p-12">
            <SectionTitle />
            {children}
          </div>
          <SideEditor />
        </div>
      </body>
    </html>
  );
}
