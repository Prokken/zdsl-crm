import Layout from "@/layout/layout";
import { RouteObject } from "react-router";
import { crm } from "./routeObjects/crm";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      // crm
      crm,
    ],
  },
];
