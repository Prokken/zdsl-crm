import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar2 = () => {
  const [selectedRange, setSelectedRange] = useState<
    { from?: Date; to?: Date } | undefined
  >();
  const [customRange, setCustomRange] = useState<string>("Last 30 Days");

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

  const applyRange = () => {
    setSelectedRange(predefinedRanges[customRange]);
  };

  return (
    <div className="calendar-container">
      <div className="quick-filters">
        {Object.keys(predefinedRanges).map((range) => (
          <button
            key={range}
            className={`filter-btn ${customRange === range ? "active" : ""}`}
            onClick={() => setCustomRange(range)}
          >
            {range}
          </button>
        ))}
      </div>

      <div className="day-picker-wrapper">
        <DayPicker
          mode="range"
          selected={selectedRange}
          onSelect={setSelectedRange}
          numberOfMonths={2}
          defaultMonth={new Date()}
        />
      </div>

      <div className="actions">
        <button
          className="clear-btn"
          onClick={() => setSelectedRange(undefined)}
        >
          Clear Filters
        </button>
        <button className="apply-btn" onClick={applyRange}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default Calendar2;
