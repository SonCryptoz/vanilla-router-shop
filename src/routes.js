import AuthLayout from "./layouts/AuthLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import CartPage from "./pages/Cart";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import ProductDetailsPage from "./pages/ProductDetails";
import SigInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";

export const routes = [
    {
        path: "/",
        component: HomePage,
        layout: DefaultLayout,
    },
    {
        path: "/products",
        component: ProductPage,
        layout: DefaultLayout,
    },
    {
        path: "/products/:id",
        component: ProductDetailsPage,
        layout: DefaultLayout,
    },
    {
        path: "/cart",
        component: CartPage,
        layout: DefaultLayout,
    },
    {
        path: "/sign-in",
        component: SigInPage,
        layout: AuthLayout,
    },
    {
        path: "/sign-up",
        component: SignUpPage,
        layout: AuthLayout,
    },
];
