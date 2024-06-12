import React, { Suspense } from "react";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import { Navigate } from "react-router-dom";

const Page404 = React.lazy(() => import("../components/organism/Page404"));
const PageLoading = React.lazy(() =>
  import("../components/organism/PageLoading")
);
const CustomerList = React.lazy(() =>
  import("../pages/Customers/ListCustomer")
);
const OrderList = React.lazy(() =>
  import("../pages/Orders/ListOrder/ListOrder")
);
const ProductList = React.lazy(() => import("../pages/Product/ListProducts"));
const ManageCategory = React.lazy(() =>
  import("../pages/Product/ManageCategory/ManageCategory")
);
const Login = React.lazy(() => import("../pages/Auth/Login"));
const AdminList = React.lazy(() => import("../pages/Admin/ListAdmin"));
const OrderRating = React.lazy(() =>
  import("../pages/Orders/OrderRating/OrderRating")
);
const ForgotPassword = React.lazy(() => import("../pages/Auth/ForgotPassword"));
const SettingPassword = React.lazy(() =>
  import("../pages/Auth/SettingPassword")
);

export default function RouteList(isLoggedIn) {
  const route = () => [
    {
      path: "/",
      title: "Product",
      element: <DashboardLayout />,
      icon: <i className="bi bi-bag-fill"></i>,
      children: [
        {
          index: true,
          title: "List Product",
          element: (
            <Suspense fallback={<PageLoading />} children={<ProductList />} />
          ),
        },
        {
          path: "manage-category",
          index: true,
          title: "Kelola Kategori Produk",
          element: (
            <Suspense
              fallback={<PageLoading />}
              children={<ManageCategory />}
            />
          ),
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
          element: (
            <Suspense fallback={<PageLoading />} children={<OrderList />} />
          ),
        },
        {
          path: "rating",
          index: true,
          title: "Order Rating",
          element: (
            <Suspense fallback={<PageLoading />} children={<OrderRating />} />
          ),
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
            <Suspense fallback={<PageLoading />} children={<CustomerList />} />
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
          element: (
            <Suspense fallback={<PageLoading />} children={<AdminList />} />
          ),
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Suspense fallback={<PageLoading />} children={<Login />} />,
        },
        {
          path: "forgot-password",
          element: (
            <Suspense
              fallback={<PageLoading />}
              children={<ForgotPassword />}
            />
          ),
        },

        { index: true, element: <Navigate to="/auth/login" /> },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "set-password",
          element: (
            <Suspense
              fallback={<PageLoading />}
              children={<SettingPassword />}
            />
          ),
        },
      ],
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ];
  return route();
}
