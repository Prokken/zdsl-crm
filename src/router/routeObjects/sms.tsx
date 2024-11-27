import Dashboard from "@/pages/SMS/dashboard";
import Integrations from "@/pages/SMS/integrations";
import SMSAutomation from "@/pages/SMS/sms-automation";
import SMSCampaign from "@/pages/SMS/sms-campaign";
import SMSTemplate from "@/pages/SMS/sms-template";
import { Navigate, RouteObject } from "react-router";

export const sms: RouteObject = {
  path: "/sms",
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
      path: "sms-campaign",
      element: <SMSCampaign />,
    },
    {
      path: "sms-automation",
      element: <SMSAutomation />,
    },
    {
      path: "sms-template",
      element: <SMSTemplate />,
    },
    {
      path: "integrations",
      element: <Integrations />,
    },
  ],
};
