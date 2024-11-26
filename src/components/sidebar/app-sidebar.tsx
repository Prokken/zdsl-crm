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
import { NavLink } from "react-router";

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
  const renderMenuItems = (menuItems: MenuItemObject[], depth = 0) => {
    const RenderContent = ({ menu }: { menu: MenuItemObject }) =>
      menu?.children && menu?.children?.length > 0 ? (
        <Collapsible defaultOpen>
          <SidebarGroup className={`${depth != 0 && "!p-0"}`}>
            <SidebarGroupLabel className="p-0">
              <CollapsibleTrigger className="flex w-full">
                <span>{menu.title}</span>
                <div className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180">
                  <Icon src={plus} width={14} height={14} />
                </div>
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                {menu.children && menu.children.length > 0 && (
                  <SidebarMenuSub className="submenu !p-0">
                    {renderMenuItems(menu.children, depth + 1)}
                  </SidebarMenuSub>
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
          to={menu?.path}
          className={({ isActive }) =>
            isActive
              ? "text-black font-semibold border-l-2 border-l-[#017BFE] flex gap-[10px] p-[13px]"
              : "flex gap-[10px] p-[13px]"
          }
        >
          {/* className="flex px-[13px] py-[24px] gap-[10px] border-l-2 border-l-emerald-500" */}

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
        <SidebarMenuSubItem className="submenu-item">
          <RenderContent menu={menu} />
        </SidebarMenuSubItem>
      )
    );
  };
  return (
    <SidebarMenu className="sidebar-menu">{renderMenuItems(menus)}</SidebarMenu>
  );
};
