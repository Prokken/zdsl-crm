import Navbar from "@/components/navbar/navbar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
export default function Layout() {
  return (
    <div className="h-screen w-screen">
      <SidebarProvider className="h-full w-full">
        <AppSidebar />
        <main className="w-full h-full flex flex-col gap-y-4 overflow-auto">
          <div className="border-b-2 border-border">
            <Navbar />
          </div>
          <div className="container h-full overflow-auto">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
