import Navbar from "@/components/navbar/navbar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
export default function Layout() {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full px-3 ">
          <Navbar />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}
