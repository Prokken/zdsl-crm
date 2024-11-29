import contracts from "/src/assets/icons/contracts.svg";
import dashboard from "/src/assets/icons/dashboard.svg";
import forms from "/src/assets/icons/forms.svg";
import leadManager from "/src/assets/icons/lead-managers.svg";
import leads from "/src/assets/icons/leads.svg";
import message_templates from "/src/assets/icons/message-template.svg";
import sms_automation from "/src/assets/icons/sms-automation.svg";
import sms_campaign from "/src/assets/icons/sms-campaign.svg";
import sms_integrations from "/src/assets/icons/sms-integrations.svg";
import sms_template from "/src/assets/icons/sms-template.svg";
import crm_integrations from "/src/assets/icons/crm-integrations.svg";

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
        icon: sms_integrations,
      },
    ],
  },
];
