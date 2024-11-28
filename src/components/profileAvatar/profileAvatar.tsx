import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import PopoverListContent from "../popover/PopoverListContent";

function ProfileAvatar() {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverListContent></PopoverListContent>
    </Popover>
  );
}

export default ProfileAvatar;
