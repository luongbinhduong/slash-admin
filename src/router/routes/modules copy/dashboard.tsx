import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router";

import { SvgIcon } from "@/components/icon";
import { CircleLoading } from "@/components/loading";

import type { AppRouteObject } from "#/router";

const HomePage = lazy(() => import("@/pages/dashboard/workbench"));
const Analysis = lazy(() => import("@/pages/dashboard/analysis"));

const dashboard: AppRouteObject = {
  order: 1,
  path: "dashboard",
  element: (
    <Suspense fallback={<CircleLoading />}>
      <Outlet />
    </Suspense>
  ),
  meta: {
    label: "Bảng điều khiển",
    icon: (
      <SvgIcon icon="ic-analysis" className="ant-menu-item-icon" size="24" />
    ),
    key: "/dashboard",
  },
  children: [
    {
      index: true,
      element: <Navigate to="general" replace />,
    },
    {
      path: "general",
      element: <HomePage />,
      meta: { label: "Tổng quan", key: "/dashboard/general" },
    },
    {
      path: "report",
      element: <Analysis />,
      meta: { label: "Báo cáo", key: "/dashboard/report" },
    },
  ],
};

export default dashboard;
