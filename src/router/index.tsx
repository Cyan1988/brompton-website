import React from "react";
import { useRoutes } from "react-router";
import { Spin } from "antd";

export default function BpRouter() {
  const element = useRoutes([
    {
      path: "/",
      element: LazyLoad("homePage"),
    },
    {
      path: "/brompton-website",
      element: LazyLoad("homePage"),
    },
    {
      path: "/*",
      element: LazyLoad("notFoundPage"),
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
    {
      path: "/shop/result/:search",
      element: LazyLoad("productsPage"),
    },
    {
      path: "/shop/result/",
      element: LazyLoad("productsPage"),
    },
    {
      path: "/login",
      element: LazyLoad("logInPage"),
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
            <Spin /> Loading Now...
          </div>
        }
      >
        <LazyLoadComponent />
      </React.Suspense>
    </div>
  );
};
