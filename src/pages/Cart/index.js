import Link from "../../components/Link";

const CartPage = () => {
    return `
        <section class="flex min-h-105 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div
                class="flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-4xl"
                aria-hidden="true"
            >
                &#128722;
            </div>
            <h2 class="mt-6 text-2xl font-black text-slate-950">
                Your cart is empty
            </h2>
            <p class="mt-3 max-w-md text-sm leading-6 text-slate-500">
                You have not added anything yet. Explore our collection
                and find something you love.
            </p>
            ${Link({
                to: "/products",
                children: "Start shopping",
                className:
                    "mt-7 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-500",
            })}
        </section>
    `;
};

export default CartPage;
