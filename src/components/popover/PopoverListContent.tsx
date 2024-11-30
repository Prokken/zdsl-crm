import { PopoverArrow } from "@radix-ui/react-popover";
import { Link } from "react-router-dom"; // Corrected import for `Link`
import { Button } from "../ui/button";
import { PopoverContent as PopoverContentBase } from "../ui/popover";

interface MenuItem {
  id: number;
  title: string | JSX.Element;
  path?: string;
  icon?: React.ReactNode | null; // Allowing null or any valid ReactNode (icon)
}

function PopoverListContent({
  asLink = false,
  menus,
}: {
  asLink?: boolean;
  menus: MenuItem[]; // Using the passed prop `menus` instead of `demo`
}) {
  return (
    <PopoverContentBase
      side="bottom"
      align="end"
      className="popover-list-content w-[200px] rounded-sm shadow-xxl"
    >
      <PopoverArrow width={10} height={5} className="fill-white" />
      <ul>
        {menus?.length > 0 &&
          menus.map((item) => (
            <li key={item.id}>
              <Button
                variant={asLink ? "link" : "default"}
                className="bg-transparent w-full text-start justify-start p-[0.62rem] hover:bg-accent rounded-sm underline-offset-0 hover:underline-offset-0 text-accent-foreground font-primary font-normal text-sm"
              >
                {asLink ? (
                  <Link className="decoration-0" to={item.path!}>
                    {/* Render the icon if available */}
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.title}
                  </Link>
                ) : (
                  <>
                    {/* Render the icon if available */}
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    <span>{item.title}</span>
                  </>
                )}
              </Button>
            </li>
          ))}
      </ul>
    </PopoverContentBase>
  );
}

export default PopoverListContent;
