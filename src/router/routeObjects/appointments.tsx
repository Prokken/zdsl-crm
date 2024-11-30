import Bookings from "@/pages/Appointment/bookings";
import Integrations from "@/pages/Appointment/integrations";
import Pages from "@/pages/Appointment/pages";
import Dashboard from "@/pages/CRM/dashboard";
import { Navigate, RouteObject } from "react-router";

export const appointments: RouteObject = {
  path: "/appointments",
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
      path: "bookings",
      element: <Bookings />,
    },
    {
      path: "pages",
      element: <Pages />,
    },
    {
      path: "integrations",
      element: <Integrations />,
    },
  ],
};
