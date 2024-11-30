import Layout from "@/layout/layout";
import { Navigate, RouteObject } from "react-router";
import { crm } from "./routeObjects/crm";
import { sms } from "./routeObjects/sms";
import { appointments } from "./routeObjects/appointments";
import { team } from "./routeObjects/team";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/crm/dashboard" />,
      },
      crm,
      sms,
      appointments,
      team,
    ],
  },
];
