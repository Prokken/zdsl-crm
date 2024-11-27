import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "../ui/button";
function Navbar() {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="h-[50px] border-b border-blue-200 w-full py-3">
      <nav>
        <Button onClick={toggleSidebar}>Sidebar</Button>
      </nav>
    </div>
  );
}

export default Navbar;
