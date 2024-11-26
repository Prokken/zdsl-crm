import contracts from "/src/assets/icons/contracts.svg";
import dashboard from "/src/assets/icons/dashboard.svg";
import forms from "/src/assets/icons/forms.svg";
import leadManager from "/src/assets/icons/lead-managers.svg";
import leads from "/src/assets/icons/leads.svg";

export type MenuItemObject = {
  title: string;
  path: `/${string}`;
  icon?: string | null;
  isRoot?: boolean;
  children?: MenuItemObject[];
};

export const menus: MenuItemObject[] = [
  {
    title: "CRM",
    path: "/crm",
    icon: null,
    isRoot: true,
    children: [
      {
        title: "Dashboard",
        path: "/crm/dashboard",
        icon: dashboard,
      },
      {
        title: "Contracts",
        path: "/crm/contracts",
        icon: contracts,
      },
      {
        title: "Leads",
        path: "/crm/leads",
        icon: leads,
      },
      {
        title: "Lead Managers",
        path: "/crm/lead-managers",
        icon: leadManager,
      },
      {
        title: "Forms",
        path: "/crm/forms",
        icon: forms,
        isRoot: true,
        children: [
          {
            title: "Form 1",
            path: "/crm/forms/form-1",
          },
        ],
      },
    ],
  },
  {
    title: "HRM",
    path: "/hrm",
    icon: null,
    isRoot: true,
    children: [
      {
        title: "Dashboard",
        path: "/crm/dashboard",
        icon: dashboard,
      },
    ],
  },
];
