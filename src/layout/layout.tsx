import Navbar from "@/components/navbar/navbar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
export default function Layout() {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full  relative overflow-hidden">
          <div className="border-b-2 border-border ">
            <Navbar />
          </div>
          <div className="container pt-4 ">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
