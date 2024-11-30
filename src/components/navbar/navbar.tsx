import { Breadcrumb } from "../breadcurmb/breadcrumbs";
import NextBackButton from "../nextBackButton";
import Notification from "../notification/notification";
import ProfileAvatar from "../profileAvatar/profileAvatar";
import SearchForm from "../search/searchForm";
import Todo from "../todo/todo";
import { Button } from "../ui/button";
function Navbar() {
  return (
    <div className=" border-b-2 border-border sticky top-0 z-[1000] bg-white w-full ">
      <div className="  py-4 w-full flex flex-col justify-center container">
        {/* wrapper  */}
        <div className="flex gap-6  justify-between w-full items-center ">
          {/* left  */}
          <div className="flex gap-4 items-center">
            <NextBackButton />

            <div className="divider w-[2px] bg-border h-[30px] "></div>

            <Breadcrumb />
          </div>
          {/* right   */}
          <div className="flex gap-3 items-center ">
            <Todo />

            <SearchForm />

            <Button className="text-base  rounded-sm text-white hover:bg-primary-hover-background">
              Upgrade plan
            </Button>

            <Notification />

            <ProfileAvatar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
