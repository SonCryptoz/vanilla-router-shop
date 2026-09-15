import Link from "../../components/Link";

const Header = () => {
    return `
        <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
            <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
                ${Link({
                    to: "/",
                    children: "React Router Shop",
                    className:
                        "shrink-0 text-2xl font-black tracking-tight text-slate-950",
                })}

                <nav
                    aria-label="Main navigation"
                    class="hidden items-center gap-8 text-sm md:flex"
                >
                    ${Link({
                        to: "/",
                        children: "Home",
                        active: true,
                    })}
                    ${Link({
                        to: "/products",
                        children: "Products",
                        active: true,
                    })}
                    ${Link({
                        to: "/cart",
                        children: "Cart",
                        active: true,
                    })}
                </nav>

                <div class="flex items-center gap-2 text-sm">
                    ${Link({
                        to: "/sign-in",
                        children: "Sign in",
                        className:
                            "hidden rounded-full px-4 py-2.5 font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 sm:inline-flex",
                    })}
                    ${Link({
                        to: "/sign-up",
                        children: "Sign Up",
                        className:
                            "rounded-full bg-slate-950 px-4 py-2.5 font-semibold text-white shadow-sm transition-all hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/20",
                    })}
                </div>
            </div>
        </header>
    `;
};

export default Header;
