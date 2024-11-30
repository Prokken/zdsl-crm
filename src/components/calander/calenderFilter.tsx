import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { addDays } from "date-fns";
import { ChevronsRight } from "lucide-react";
import * as React from "react";
import { DateRange } from "react-day-picker";
import { Button } from "../ui/button";

const predefinedRanges = {
  "Last 3 Days": {
    from: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    to: new Date(),
  },
  "Last 7 Days": {
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    to: new Date(),
  },
  "Last 30 Days": {
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    to: new Date(),
  },
  "Last 2 Months": {
    from: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
    to: new Date(),
  },
  "Last 3 Months": {
    from: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
    to: new Date(),
  },
  "Last 6 Months": {
    from: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000),
    to: new Date(),
  },
  "Last 1 Year": {
    from: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
    to: new Date(),
  },
};

function CalenderFilter({
  className,
  getDate,
  cancelHandler,
}: {
  getDate: React.Dispatch<React.SetStateAction<DateRange | null>>;
  cancelHandler: () => void;
  className?: string;
}) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(2022, 0, 20), 680),
  });
  const [customRange, setCustomRange] = React.useState<string>("Last 30 Days");

  const applyDateHandler = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    getDate({ from: date?.from!, to: date?.to! });
  };

  return (
    <div className={cn("flex gap-6  bg-white w-fit ", className)}>
      <div className="w-full border-r-[1px] pt-7 pl-8 pr-4">
        <Button className="p-0  m-0 bg-transparent text-sm">
          Customized{" "}
          <span className="text-primary">
            <ChevronsRight />
          </span>
        </Button>
        <ul className="m-0 pt-1 ">
          {Object.keys(predefinedRanges).map((range) => (
            <li key={range} className="flex flex-col ">
              <button
                className={`filter-btn text-start text-sm  py-2 border-t-[1px] first:border-t-0  border-b-[1px] ${
                  customRange === range ? "text-primary" : ""
                }`}
                onClick={() => setCustomRange(range)}
              >
                {range}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={cn(" w-full  pt-7 pl-2 pr-6")}>
        <div>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            pagedNavigation
            numberOfMonths={2}
            classNames={{
              root: "w-full h-full",
            }}
          />
        </div>
        <div className="flex justify-between items-center pt-8 px-[12px] pb-8 ">
          <Button
            variant={"outline"}
            className="shadow-none rounded-sm text-sm"
            onClick={cancelHandler}
          >
            Cancel
          </Button>
          <div>
            <span className="text-base">30 Days</span>
          </div>
          <div className="flex items-center gap-5">
            <Button
              variant={"ghost"}
              className="text-sm px-5 py-3 rounded-sm text-primary"
            >
              Clear Filters
            </Button>
            <Button
              variant={"default"}
              onClick={applyDateHandler}
              className="px-5 py-3 rounded-sm text-white text-sm hover:bg-primary-hover-background "
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalenderFilter;
