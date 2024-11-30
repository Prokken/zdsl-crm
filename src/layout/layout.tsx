import Navbar from "@/components/navbar/navbar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
export default function Layout() {
  return (
    <SidebarProvider className="w-full h-screen">
      <AppSidebar />
      <main className="w-full h-full flex flex-col  overflow-auto ">
        <Navbar />
        <div className="container flex-1 overflow-auto ">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
