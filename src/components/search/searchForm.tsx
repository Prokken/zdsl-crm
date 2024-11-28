import searchIcon from "@/assets/icons/search.png";
import { Popover, PopoverContent } from "@radix-ui/react-popover";
import { useState } from "react";
import { PopoverTrigger } from "../ui/popover";

function SearchForm() {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <form className="max-w-[250px]" onClick={openHandler}>
        <div className="w-full flex py-0 rounded-sm items-center bg-accent pl-[1.25rem] pr-[0.8rem]">
          <input
            type="search"
            placeholder="Search Here..."
            className="block bg-transparent py-[7px] placeholder:text-sm w-full focus:outline-none"
          />
          <figure className="w-[20px] h-[20px]">
            <img src={searchIcon} alt="search " className="block  " />
          </figure>
        </div>
      </form>
      <Popover open={isOpen}>
        <PopoverTrigger asChild>
          <span></span>
        </PopoverTrigger>
        <PopoverContent
          className="shadow-md rounded-md w-[250px] "
          align="start"
          side="bottom"
          sideOffset={10}
        >
          <div className="bg-white p-4 w-full">
            <p>No results found</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default SearchForm;
