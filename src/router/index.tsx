import React from "react";
import { useRoutes } from "react-router";

export default function BpRouter() {
  const element = useRoutes([
    {
      path: "/",
      element: LazyLoad("homePage"),
    },
    {
      path: "*",
      element: LazyLoad("homePage"),
    },
    {
      path: "/home",
      element: LazyLoad("homePage"),
    },
    {
      path: "/shop",
      element: LazyLoad("productsPage"),
    },
    {
      path: "/checkout",
      element: LazyLoad("checkoutPage"),
    },
  ]);
  return element;
}

// 路由懒加载的封装
const LazyLoad = (path: string) => {
  const LazyLoadComponent = React.lazy(() => import(`../pages/${path}`));
  return (
    <React.Suspense fallback={<>Loading Now</>}>
      <LazyLoadComponent></LazyLoadComponent>
    </React.Suspense>
  );
};
