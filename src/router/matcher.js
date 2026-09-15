// dynamic route
export const matchRoute = (routePath, currentPath) => {
    const routeSegments = routePath.split("/");
    const pathSegments = currentPath.split("/");

    if (routeSegments.length !== pathSegments.length) {
        return null;
    }

    const params = {};

    for (let i = 0; i < routeSegments.length; i++) {
        const routeSegment = routeSegments[i];
        const pathSegment = pathSegments[i];

        if (routeSegment.startsWith(":")) {
            const paramName = routeSegment.slice(1);

            params[paramName] = decodeURIComponent(pathSegment);
            continue;
        }

        if (routeSegment !== pathSegment) {
            return null;
        }
    }

    return params;
};
