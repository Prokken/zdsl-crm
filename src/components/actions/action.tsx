import { PopoverTrigger } from "@radix-ui/react-popover";
import { EllipsisVertical } from "lucide-react";
import PopoverListContent from "../popover/PopoverListContent";
import { Popover } from "../ui/popover";

function Action() {
  return (
    <Popover>
      <PopoverTrigger>
        <EllipsisVertical />
      </PopoverTrigger>
      <PopoverListContent
        menus={[
          { title: "Import", id: 1 },
          { title: "Export", id: 2 },
          { title: "Print", id: 3 },
          { title: "Trash", id: 4 },
        ]}
      ></PopoverListContent>
    </Popover>
  );
}

export default Action;
