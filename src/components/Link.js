const Link = ({ to, children, className = "", active = false }) => {
    const currentPath = decodeURIComponent(location.hash.slice(1) || "/");
    const isActive =
        active &&
        (to === "/"
        ? currentPath === "/"
        : currentPath === to || currentPath.startsWith(`${to}/`));

    const activeClass = `relative transition-all duration-200 ${
        isActive
            ? "font-semibold text-slate-950 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-orange-500"
            : ""
    }`;
    const classes = `${activeClass} ${className}`.trim();

    return `
        <a href="#${to}" class="${classes}" data-link${
            isActive ? ' aria-current="page"' : ""
        }>
            ${children}
        </a>
    `;
};

export default Link;
