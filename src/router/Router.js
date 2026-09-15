import NotFoundPage from "../pages/NotFound";
import { matchRoute } from "./matcher";

class Router {
    constructor(routes) {
        this.routes = routes;

        // lắng nghe back/forward
        window.addEventListener("popstate", () => {
            this.render();
        });

        window.addEventListener("hashchange", () => {
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
        const nextHash = path.startsWith("#") ? path : `#${path}`;

        if (location.hash === nextHash) {
            this.render();
            return;
        }

        // Đổi hash không làm GitHub Pages request route mới.
        location.hash = nextHash.slice(1);

        // Scroll to top
        window.scrollTo(0, 0);

        // render sẽ nhận biét được path thay đổi
        this.render();
    }

    render() {
        const path = decodeURIComponent(location.hash.slice(1) || "/");

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
