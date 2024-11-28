import { PopoverArrow } from "@radix-ui/react-popover";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { PopoverContent as PopoverContentBase } from "../ui/popover";

const demo = [{ id: 0, title: "My Profile", path: "/profile", icon: null }];

function PopoverListContent({ asLink = false }: { asLink?: boolean }) {
  return (
    <PopoverContentBase
      side="bottom"
      align="end"
      className="popover-list-content w-[200px]  rounded-sm  shadow-xxl"
    >
      <PopoverArrow
        width={10}
        height={5}
        className="fill-white "
      ></PopoverArrow>
      <ul>
        {demo?.length > 0 &&
          demo?.map((item, i) => (
            <li key={i}>
              <Button
                variant={asLink ? "link" : "default"}
                className="bg-transparent w-full text-start justify-start p-[0.62rem] hover:bg-accent rounded-sm underline-offset-0  hover:underline-offset-0 text-accent-foreground font-primary font-normal text-sm"
              >
                {asLink ? (
                  <Link className="decoration-0" to={item?.path}>
                    {item?.title || ""}
                  </Link>
                ) : (
                  <span>{item?.title}</span>
                )}
              </Button>
            </li>
          ))}
      </ul>
    </PopoverContentBase>
  );
}

export default PopoverListContent;
