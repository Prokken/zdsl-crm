import { ReactNode } from "react";

export type MenuItemObject = {
  title: string;
  path: `/${string}`;
  icon?: ReactNode | HTMLElement | null;
  children?: MenuItemObject[];
};

export const menus: MenuItemObject[] = [
  {
    title: "CRM",
    path: "/crm",
    icon: null,
    children: [
      {
        title: "Dashboard",
        path: "/crm/dashboard",
      },
    ],
  },
];
