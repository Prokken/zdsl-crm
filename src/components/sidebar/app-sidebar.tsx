import plus from "@/assets/icons/plus.svg";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { MenuItemObject, menus } from "@/const/menus";
import { Icon } from "@/lib/ui/Icon";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { memo, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router";
import Logo from "../logo/logo";
// desktop sidebar renderer component

export function AppSidebar() {
  return (
    <Sidebar className="sidebar px-[1.35rem] py-[0.85rem]">
      <SidebarHeader className="!mx-0 mb-[1.5rem] !px-0 !p-0">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarTreeMenusView menus={menus} />
      </SidebarContent>
    </Sidebar>
  );
}

/* Recursively refers to the process of a function calling itself within its
definition. In the provided code snippet, the `renderMenuItems` function is being
called recursively to render nested menu items in a tree structure. This allows
for rendering menu items at different levels of depth within the menu hierarchy by
iterating through the menu items and their children recursively. */

export const SidebarTreeMenusView = ({
  menus,
}: {
  menus: MenuItemObject[];
}) => {
  //  current location

  const renderMenuItems = (menuItems: MenuItemObject[], depth = 0) => {
    const RenderContent = ({ menu }: { menu: MenuItemObject }) =>
      menu?.children && menu?.children?.length > 0 ? (
        <Collapsible defaultOpen>
          <CollapsibleTrigger
            className={` flex w-full items-center gap-[10px] py-3`}
          >
            {depth != 0 && menu?.icon && (
              <Icon src={menu?.icon} alt={menu?.title} className="ml-[13px]" />
            )}
            <span className={`${depth != 0 && "!p-0 !text-base"}`}>
              {menu.title}
            </span>

            <div className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180">
              <Icon src={plus} width={14} height={14} />
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent className="vertical-collapsible-content ">
            {menu.children && menu.children.length > 0 && (
              <>
                <SidebarMenuSub className="submenu  !relative !m-0 !p-0">
                  {renderMenuItems(menu.children, depth + 1)}
                  <MenuIndicator indicatorId={menu?.key || 0} />
                </SidebarMenuSub>
              </>
            )}
          </CollapsibleContent>
        </Collapsible>
      ) : depth === 0 ? (
        <span>{menu.title}</span>
      ) : (
        <NavLink to={menu?.path} className="desktop-sidebar-menu-item">
          {menu?.icon && <Icon src={menu?.icon} alt={menu?.title} />}
          <span>{menu?.title}</span>
        </NavLink>
      );

    return menuItems.map((menu, i) =>
      depth == 0 ? (
        <SidebarMenuItem key={i}>
          <RenderContent menu={{ ...menu, key: i }} />
        </SidebarMenuItem>
      ) : (
        <SidebarMenuSubItem key={i} className="submenu-item !text-base">
          <RenderContent menu={{ ...menu, key: i }} />
        </SidebarMenuSubItem>
      )
    );
  };
  return (
    <SidebarMenu className="sidebar-menu  py-[0.875px]">
      {renderMenuItems(menus)}
    </SidebarMenu>
  );
};

const MenuIndicator = memo(
  ({ indicatorId }: { indicatorId: string | number }) => {
    const location = useLocation();

    const calculateIndicator = () => {
      document.querySelectorAll(".submenu").forEach((submenu) => {
        const activeLink = submenu.querySelector("li a.active");
        if (activeLink) {
          const indicator = submenu.querySelector(`.line-indicator`);
          const activeIndicator = document.querySelector(
            ".line-indicator.active"
          );
          if (activeIndicator) {
            activeIndicator.classList.remove("active");
            activeIndicator.removeAttribute("style");
          }
          if (indicator) {
            const { offsetTop, offsetHeight } = activeLink as HTMLElement;
            (
              indicator as HTMLElement
            ).style.cssText = `top: ${offsetTop}px; height: ${offsetHeight}px; opacity: 1;`;
            indicator.classList.add("active");
          }
        }
      });
    };

    useEffect(() => {
      calculateIndicator();
    }, [location.pathname]);

    // for prevent rerendering
    const renderCount = useRef(0);
    renderCount.current = 1;

    return (
      <div
        id={`indicator-${indicatorId}`}
        className={cn(`line-indicator duration-500`)}
      ></div>
    );
  }
);
