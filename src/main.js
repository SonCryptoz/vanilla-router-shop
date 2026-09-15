import "./style.css";
import Router from "./router/Router";
import { routes } from "./routes";

const router = new Router(routes);

router.render();