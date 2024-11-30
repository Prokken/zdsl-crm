import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import { DateRange } from "react-day-picker";
import CalenderFilter from "../calander/calenderFilter";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
function FilterByDate() {
  const [date, setDate] = React.useState<DateRange | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const cancelHandler = () => {
    setDate(null);
    closeHandler();
  };

  const closeHandler = () => {
    setOpen(false);
  };
  const openHandler = () => {
    setOpen(true);
  };

  console.log(date);

  return (
    <Popover open={open} modal>
      <PopoverTrigger asChild>
        <div
          role="button"
          className={cn(
            " p-0  justify-start text-left font-normal flex border px-2 rounded-r rounded-l cursor-pointer ",
            !date && "text-muted-foreground"
          )}
          onClick={openHandler}
        >
          <span className=" pr-2 py-1  text-nowrap flex justify-center items-center">
            Last 30 Days
          </span>
          <span className="flex items-center py-1 gap-1 pl-3 border-l text-nowrap ">
            <CalendarIcon />
            {date ? (
              date.to?.toLocaleDateString()
            ) : (
              <span className=" text-nowrap">Pick a date</span>
            )}
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="end"
        className="w-full  border-[1px] p-0 !rounded-md"
      >
        <CalenderFilter getDate={setDate} cancelHandler={cancelHandler} />
      </PopoverContent>
    </Popover>
  );
}

export default FilterByDate;
