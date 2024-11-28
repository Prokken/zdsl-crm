import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import PopoverListContent from "../popover/PopoverListContent";

function ProfileAvatar() {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverListContent></PopoverListContent>
      </Popover>
    </div>
  );
}

export default ProfileAvatar;
