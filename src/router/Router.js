import NotFoundPage from "../pages/NotFound";
import { matchRoute } from "./matcher";

class Router {
    constructor(routes) {
        this.routes = routes;

        // lắng nghe back/forward
        window.addEventListener("popstate", () => {
            this.render();
        });

        // Xử lý click không load lại trang như Link
        document.addEventListener("click", (e) => {
            const link = e.target.closest("[data-link]");

            if (!link) return;

            e.preventDefault();

            const path = link.getAttribute("href");

            // điều hướng
            this.navigate(path);
        });
    }

    navigate(path) {
        // thay đổi đường dẫn không load lại trang
        history.pushState({}, "", path);

        // Scroll to top
        window.scrollTo(0, 0);

        // render sẽ nhận biét được path thay đổi
        this.render();
    }

    render() {
        const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
        const path = location.pathname.startsWith(basePath)
            ? location.pathname.slice(basePath.length) || "/"
            : location.pathname; // lấy path không gồm base của GitHub Pages

        const root = document.querySelector("#app");

        if (!root) return;

        // const route = this.routes.find((route) => route.path === path); // so sánh khớp với path
        // Dynamic route
        const matchedRoute = this.routes
            .map((route) => {
                const params = matchRoute(route.path, path);

                if (!params) {
                    return null;
                }

                return {
                    route,
                    params,
                };
            })
            .find(Boolean);

        if (!matchedRoute) {
            root.innerHTML = NotFoundPage(); // path không tồn tại về trang not found
            return;
        }

        const { route, params } = matchedRoute;

        const content = route.component(params);

        // render component tương ứng path vs layout
        if (route.layout) {
            root.innerHTML = route.layout(content);
        } else {
            root.innerHTML = content;
        }
    }
}

export default Router;
