import contracts from "/src/assets/icons/contracts.svg";
import dashboard from "/src/assets/icons/dashboard.svg";
import forms from "/src/assets/icons/forms.svg";
import leadManager from "/src/assets/icons/lead-managers.svg";
import leads from "/src/assets/icons/leads.svg";
import message_templates from "/src/assets/icons/message-template.svg";
import sms_automation from "/src/assets/icons/sms-automation.svg";
import sms_campaign from "/src/assets/icons/sms-campaign.svg";
import crm_settings from "/src/assets/icons/crm-settings.svg";
import sms_template from "/src/assets/icons/sms-template.svg";
import crm_integrations from "/src/assets/icons/crm-integrations.svg";
import integrations from "/src/assets/icons/integrations.svg";
import user_role from "/src/assets/icons/user-role.svg";
import members from "/src/assets/icons/members.svg";

export type MenuItemObject = {
  title: string;
  path: `/${string}`;
  icon?: string | null;
  isRoot?: boolean;
  children?: MenuItemObject[];
  key?: number;
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
      },
      {
        title: "Massage Templates",
        path: "/crm/message-templates",
        icon: message_templates,
      },
      {
        title: "CRM Settings",
        path: "/crm/crm-settings",
        icon: crm_settings,
      },
      {
        title: "Integrations",
        path: "/crm/integrations",
        icon: crm_integrations,
      },
    ],
  },
  {
    title: "SMS Camp.",
    path: "/sms",
    icon: null,
    isRoot: true,
    children: [
      {
        title: "Dashboard",
        path: "/sms/dashboard",
        icon: dashboard,
      },
      {
        title: "SMS Campaign",
        path: "/sms/sms-campaign",
        icon: sms_campaign,
      },
      {
        title: "SMS Automation",
        path: "/sms/sms-automation",
        icon: sms_automation,
      },
      {
        title: "SMS Template",
        path: "/sms/sms-template",
        icon: sms_template,
      },
      {
        title: "Integrations",
        path: "/sms/integrations",
        icon: integrations,
      },
    ],
  },
  {
    title: "Appointments",
    path: "/appointments",
    icon: null,
    isRoot: true,
    children: [
      {
        title: "Dashboard",
        path: "/appointments/dashboard",
        icon: dashboard,
      },
      {
        title: "Bookings",
        path: "/appointments/bookings",
        icon: sms_campaign,
      },
      {
        title: "Pages",
        path: "/appointments/pages",
        icon: sms_automation,
      },
      {
        title: "Integrations",
        path: "/appointments/integrations",
        icon: integrations,
      },
    ],
  },
  {
    title: "Team Members",
    path: "/team",
    icon: null,
    isRoot: true,
    children: [
      {
        title: "Members",
        path: "/team/members",
        icon: members,
      },
      {
        title: "User Role",
        path: "/team/user-role",
        icon: user_role,
      },
    ],
  },
];
