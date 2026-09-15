import Link from "../../components/Link";

const NotFoundPage = () => {
    return `
        <main class="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 text-center text-white">
            <div class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
            <div class="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl"></div>

            <section class="relative z-10 max-w-lg">
                <p class="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
                    Page not found
                </p>
                <h1 class="text-8xl font-black tracking-tight text-white sm:text-9xl">
                    404
                </h1>
                <p class="mx-auto mt-5 max-w-md text-base leading-7 text-slate-300 sm:text-lg">
                    The page you are looking for does not exist or may have been
                    moved to another address.
                </p>
                ${Link({
                    to: "/",
                    children: "Back to home",
                    className:
                        "mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-400",
                })}
            </section>
        </main>
    `;
};

export default NotFoundPage;
