import Navbar from "@/components/navbar/navbar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
export default function Layout() {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full  relative">
          <div>
            <Navbar />
          </div>
          <div className="px-5 pt-4">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
