import { ReactNode } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
