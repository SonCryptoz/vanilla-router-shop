import formatPrice from "../../../../react-router-shop/src/utils/formatPrice";
import Link from "../../components/Link";
import products from "../../data/products";

const ProductDetailsPage = (params = {}) => {
    const product = products.find((item) => item.id === Number(params.id));

    if (!product) {
        return `
            <div class="flex min-h-[50vh] flex-col items-center justify-center text-center">
                <p class="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Product unavailable</p>
                <h1 class="mt-3 text-3xl font-black text-slate-950">We could not find that product.</h1>
                ${Link({ to: "/products", children: "Back to products", className: "mt-6 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500" })}
            </div>
        `;
    }

    const saleBadge = product.originalPrice
        ? `<span class="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white">Sale</span>`
        : "";
    const colors = product.colors
        .map(
            (color) =>
                `<span class="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">${color}</span>`,
        )
        .join("");

    return `
        <div class="space-y-12 pb-8">
            ${Link({ to: "/products", children: "Back to products", className: "inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-orange-500" })}
            <section class="grid gap-10 lg:grid-cols-2 lg:gap-16">
                <div class="relative overflow-hidden rounded-3xl bg-slate-200">
                    <img src="${product.image}" alt="${product.title}" class="aspect-square h-full w-full object-cover" />
                    ${saleBadge}
                </div>
                <div class="flex flex-col justify-center">
                    <p class="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">${product.category}</p>
                    <h1 class="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">${product.title}</h1>
                    <div class="mt-5 flex flex-wrap items-center gap-3 text-sm">
                        <span class="text-amber-500">&#9733; ${product.rating}</span>
                        <span class="text-slate-400">(${product.reviews} reviews)</span>
                        <span class="h-1 w-1 rounded-full bg-slate-300"></span>
                        <span class="font-semibold text-emerald-600">${product.stock > 0 ? "In stock" : "Out of stock"}</span>
                    </div>
                    <div class="mt-7 flex items-baseline gap-3">
                        <span class="text-3xl font-black text-slate-950">${formatPrice(product.price)}</span>
                        ${product.originalPrice ? `<span class="text-lg text-slate-400 line-through">${formatPrice(product.originalPrice)}</span>` : ""}
                    </div>
                    <p class="mt-6 max-w-xl text-base leading-7 text-slate-500">${product.description}</p>
                    <div class="mt-8 border-y border-slate-200 py-6">
                        <p class="text-sm font-bold text-slate-900">Available colors</p>
                        <div class="mt-3 flex flex-wrap gap-2">${colors}</div>
                    </div>
                    <div class="mt-7 flex flex-col gap-3 sm:flex-row">
                        <button type="button" class="inline-flex flex-1 items-center justify-center cursor-pointer rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-500">Add to cart</button>
                        ${Link({ to: "/products", children: "Keep browsing", className: "inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-orange-300 hover:text-orange-500" })}
                    </div>
                    <div class="mt-7 grid grid-cols-3 gap-3 text-center text-xs text-slate-500">
                        <div class="rounded-xl bg-slate-50 px-2 py-3">Free shipping over $75</div>
                        <div class="rounded-xl bg-slate-50 px-2 py-3">30-day returns</div>
                        <div class="rounded-xl bg-slate-50 px-2 py-3">Secure checkout</div>
                    </div>
                </div>
            </section>
        </div>
    `;
};

export default ProductDetailsPage;
