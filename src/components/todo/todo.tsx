import { icons } from "@/const/icons";
import { Button } from "../ui/button";

function Todo() {
  return (
    <div>
      <Button className="!w-[5rem] !py-[9px] m-0 bg-[#ffd9b6] hover:bg-[#ffd9b6d0] duration-150 font-semibold rounded-sm ">
        <img src={icons.get("threeDots")!} alt="todo " />
        To Do
      </Button>
    </div>
  );
}

export default Todo;
