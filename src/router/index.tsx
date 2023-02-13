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
    {
      path: "/shop/detail/:id",
      element: LazyLoad("productsDetailPage"),
    },
  ]);
  return element;
}

// 路由懒加载的封装
const LazyLoad = (path: string) => {
  const LazyLoadComponent = React.lazy(() => import(`../pages/${path}`));

  return (
    <div>
      <React.Suspense
        fallback={
          <div className="text-center h-[40rem] leading-[40rem]">
            Loading Now...
          </div>
        }
      >
        <LazyLoadComponent />
      </React.Suspense>
    </div>
  );
};
