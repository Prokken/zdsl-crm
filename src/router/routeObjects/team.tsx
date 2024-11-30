import Members from "@/pages/Team/members";
import UserRole from "@/pages/Team/user-role";
import { Navigate, RouteObject } from "react-router";

export const team: RouteObject = {
  path: "/team",
  children: [
    {
      element: <Navigate to="members" />,
      index: true,
    },
    {
      path: "members",
      element: <Members />,
      index: true,
    },
    {
      path: "user-role",
      element: <UserRole />,
    },
  ],
};
