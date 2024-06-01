import React, { Suspense } from "react";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";

const Page404 = React.lazy(() => import("../components/organism/Page404"));

const CustomerList = React.lazy(() =>
  import("../pages/Customers/ListCustomer")
);
const OrderList = React.lazy(() =>
  import("../pages/Orders/ListOrder/ListOrder")
);
const ProductList = React.lazy(() => import("../pages/Product/ListProducts"));
const Login = React.lazy(() => import("../pages/Auth/Login"));
const AdminList = React.lazy(() => import("../pages/Admin/ListAdmin"));
const OrderRating = React.lazy(() =>
  import("../pages/Orders/OrderRating/OrderRating")
);

export const routeList = [
  {
    path: "/product",
    title: "Product",
    element: <DashboardLayout />,
    icon: <i className="bi bi-bag-fill"></i>,
    children: [
      {
        index: true,
        title: "List Product",
        element: <Suspense fallback="loading...." children={<ProductList />} />,
      },
    ],
  },
  {
    path: "/order",
    title: "Order",
    icon: <i className="bi bi-cart-fill"></i>,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        title: "List Order",
        element: <Suspense fallback="loading...." children={<OrderList />} />,
      },
      {
        path: "rating",
        index: true,
        title: "Order Rating",
        element: <Suspense fallback="loading...." children={<OrderRating />} />,
      },
    ],
  },
  {
    path: "/customers",
    title: "Customers",
    element: <DashboardLayout />,
    icon: <i className="bi bi-people-fill"></i>,
    children: [
      {
        index: true,
        title: "List Customers",
        element: (
          <Suspense fallback="loading...." children={<CustomerList />} />
        ),
      },
    ],
  },
  {
    path: "/admin",
    title: "Admin",
    element: <DashboardLayout />,
    icon: <i className="bi bi-person-badge-fill"></i>,
    children: [
      {
        index: true,
        title: "List Admin",
        element: <Suspense fallback="loading...." children={<AdminList />} />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Suspense fallback="loading...." children={<Login />} />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
];
