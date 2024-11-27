import plus from "@/assets/icons/plus.svg";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
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
import { useEffect, useRef } from "react";
import { NavLink } from "react-router";

// desktop sidebar renderer component

export function AppSidebar() {
  return (
    <Sidebar className="sidebar">
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
  // current location

  const sidebarMenuRef = useRef<HTMLElement | undefined>();

  // Run when the component mounts to apply indicator to the active menu item
  useEffect(() => {
    const activeLink = sidebarMenuRef.current?.querySelector(
      `a[href="${location.pathname}"]`
    );

    if (activeLink) {
      // Simulate the indicator logic on the active link
      const parentEle = activeLink?.parentElement?.parentElement;
      const submenus = sidebarMenuRef.current?.querySelectorAll("ul.submenu");

      // Remove 'active' class from all submenus
      submenus?.forEach((ele) => {
        ele.classList.remove("active");
      });

      if (parentEle) {
        const indicator = parentEle.querySelector(".line-indicator");
        parentEle.classList.add("active");
        if (indicator) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          indicator.style.cssText = `--top: ${activeLink.offsetTop}px; --indicator-height: ${activeLink.offsetHeight}px; top: var(--top); height: var(--indicator-height);`;
        }
      }
    }
  }, [location.pathname]);

  const navlinkClickHandler = (e: React.El) => {
    const activeEle = e.currentTarget;
    const parentEle = activeEle?.parentElement?.parentElement;
    const submenus = sidebarMenuRef.current?.querySelectorAll("ul.submenu");
    console.log(submenus);

    submenus?.forEach((ele) => {
      ele.classList.remove("active");
    });

    if (parentEle) {
      const indicator = parentEle.querySelector(".line-indicator");
      parentEle.classList.add("active");
      if (indicator) {
        indicator.style.cssText = `--top: ${activeEle.offsetTop}px; --indicator-height: ${activeEle.offsetHeight}px; top: var(--top); height: var(--indicator-height); `;
      }
    }
  };

  const renderMenuItems = (menuItems: MenuItemObject[], depth = 0) => {
    const RenderContent = ({ menu }: { menu: MenuItemObject }) =>
      menu?.children && menu?.children?.length > 0 ? (
        <Collapsible defaultOpen>
          <SidebarGroup className={`${depth != 0 && "!p-0 "} relative`}>
            <SidebarGroupLabel className="p-0">
              <CollapsibleTrigger
                className={` flex w-full items-center gap-[10px]`}
              >
                {depth != 0 && menu?.icon && (
                  <Icon
                    src={menu?.icon}
                    alt={menu?.title}
                    className="ml-[13px]"
                  />
                )}
                <span className={`${depth != 0 && "!p-0 !text-[16px]"}`}>
                  {menu.title}
                </span>
                <div className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180">
                  <Icon src={plus} width={14} height={14} />
                </div>
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent className="vertical-collapsible-content">
              <SidebarGroupContent className="relative">
                {menu.children && menu.children.length > 0 && (
                  <>
                    <SidebarMenuSub className="submenu  !relative !p-0">
                      {renderMenuItems(menu.children, depth + 1)}
                      <div className="line-indicator"></div>
                    </SidebarMenuSub>
                  </>
                )}
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      ) : depth === 0 ? (
        <SidebarGroup>
          <SidebarGroupLabel>{menu.title}</SidebarGroupLabel>
        </SidebarGroup>
      ) : (
        <NavLink
          onClick={navlinkClickHandler}
          to={menu?.path}
          className="desktop-sidebar-menu-item"
        >
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
    <SidebarMenu ref={sidebarMenuRef} className="sidebar-menu">
      {renderMenuItems(menus)}
    </SidebarMenu>
  );
};
