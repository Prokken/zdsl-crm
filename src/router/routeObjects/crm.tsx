import Contracts from "@/pages/CRM/contracts";
import Dashboard from "@/pages/CRM/dashboard";
import Leads from "@/pages/CRM/leads";
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
  ],
};
