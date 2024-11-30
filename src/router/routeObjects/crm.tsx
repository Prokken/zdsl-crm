import Contracts from "@/pages/CRM/contracts";
import Dashboard from "@/pages/CRM/dashboard";
import Forms from "@/pages/CRM/forms";
import Integrations from "@/pages/CRM/integrations";
import LeadManagers from "@/pages/CRM/lead-managers";
import Leads from "@/pages/CRM/leads";
import MessageTemplates from "@/pages/CRM/message-templates";
import { Navigate, RouteObject } from "react-router";

export const crm: RouteObject = {
  path: "/crm",
  children: [
    {
      element: <Navigate to="dashboard" />,
      index: true,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      index: true,
    },
    {
      path: "contracts",
      element: <Contracts />,
    },
    {
      path: "leads",
      element: <Leads />,
    },
    {
      path: "lead-managers",
      element: <LeadManagers />,
    },
    {
      path: "forms",
      element: <Forms />,
    },
    {
      path: "message-templates",
      element: <MessageTemplates />,
    },
    {
      path: "integrations",
      element: <Integrations />,
    },
  ],
};
