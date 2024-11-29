import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { addDays } from "date-fns";
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

function CalenderFilter({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(2022, 0, 20), 680),
  });
  const [customRange, setCustomRange] = React.useState<string>("Last 30 Days");

  const applyRange = () => {
    setSelectedRange(predefinedRanges[customRange]);
  };

  return (
    <div className={cn("flex gap-10  bg-white w-fit px-4 py-3", className)}>
      <div className="">
        <ul className="">
          {Object.keys(predefinedRanges).map((range) => (
            <li key={range}>
              <button
                className={`filter-btn ${
                  customRange === range ? "active" : ""
                }`}
                onClick={() => setCustomRange(range)}
              >
                {range}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={cn(" w-full  px-4 py-2")}>
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
        <div className="flex justify-between items-center pt-3 ">
          <Button variant={"outline"}>Cancel</Button>
          <div>
            <span>30 Days</span>
          </div>
          <div>
            <Button variant={"ghost"}>Clear Filters</Button>
            <Button variant={"default"}>Apply</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalenderFilter;
