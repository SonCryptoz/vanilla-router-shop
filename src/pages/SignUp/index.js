import Link from "../../components/Link";

const SignUpPage = () => {
    return `
        <div class="flex w-full items-center justify-center py-8">
            <form class="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
                <div class="mb-7">
                    <p class="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                        React Router Shop
                    </p>
                    <h1 class="text-3xl font-black tracking-tight text-slate-950">
                        Create an account
                    </h1>
                    <p class="mt-2 text-sm leading-6 text-slate-500">
                        Join us and discover something you will love.
                    </p>
                </div>

                <div class="space-y-5">
                    <div class="space-y-2">
                        <label for="name" class="block text-sm font-semibold text-slate-700">
                            Full name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your full name"
                            required
                            class="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                        />
                    </div>

                    <div class="space-y-2">
                        <label for="email" class="block text-sm font-semibold text-slate-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            class="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                        />
                    </div>

                    <div class="space-y-2">
                        <label for="password" class="block text-sm font-semibold text-slate-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Create a password"
                            required
                            class="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                        />
                    </div>

                    <div class="space-y-2">
                        <label for="confirm-password" class="block text-sm font-semibold text-slate-700">
                            Confirm password
                        </label>
                        <input
                            id="confirm-password"
                            name="confirmPassword"
                            type="password"
                            placeholder="Repeat your password"
                            required
                            class="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    class="mt-7 w-full rounded-xl bg-slate-950 px-4 py-3 font-semibold text-white transition-colors hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
                >
                    Create account
                </button>

                <p class="mt-5 text-center text-sm text-slate-500">
                    Already have an account?
                    ${Link({
                        to: "/sign-in",
                        children: "Sign in",
                        className: "font-semibold text-orange-500 hover:text-orange-600",
                    })}
                </p>
            </form>
        </div>
    `;
};

export default SignUpPage;
