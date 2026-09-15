const AuthLayout = (content) => {
    return `
        <div class="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
            <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_35%)]"></div>
            <div class="pointer-events-none absolute -right-24 top-1/4 h-64 w-64 rounded-full border-24 border-white/70"></div>
            <div class="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-32 border-orange-100/70"></div>

            <main class="relative z-10 flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
                ${content}
            </main>
        </div>
    `;
};

export default AuthLayout;
