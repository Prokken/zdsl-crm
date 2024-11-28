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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { useEffect, useRef, useState } from "react";
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
  const location = useLocation();
  const sidebarMenuRef = useRef<HTMLElement | undefined>();
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

  useEffect(() => {
    const activeLink = document.querySelector(`.submenu li a.active`);
    const lineIndicator = document.querySelector(".line-indicator");

    if (activeLink && lineIndicator) {
      const { offsetTop, offsetHeight } = activeLink;
      lineIndicator.style.top = `${offsetTop}px`;
      lineIndicator.style.height = `${offsetHeight}px`;
    }
  }, [location.pathname]);

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
                  <div className="line-indicator"></div>
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
          <RenderContent menu={menu} />
        </SidebarMenuItem>
      ) : (
        <SidebarMenuSubItem key={i} className="submenu-item !text-base">
          <RenderContent menu={menu} />
        </SidebarMenuSubItem>
      )
    );
  };
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <SidebarMenu ref={sidebarMenuRef} className="sidebar-menu  py-[0.875px]">
      {renderMenuItems(menus)}
    </SidebarMenu>
  );
};
