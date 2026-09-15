import formatPrice from "../../utils/formatPrice";
import Link from "../../components/Link";
import products from "../../data/products";

const ProductPage = () => {
    const productCards = products
        .map((product) => {
            const saleBadge = product.originalPrice
                ? `<span class="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">Sale</span>`
                : "";

            const stockLabel = product.stock < 10 ? "Low stock" : "In stock";

            const stockClass =
                product.stock < 10
                    ? "font-semibold text-orange-600"
                    : "text-slate-500";

            return Link({
                to: `/products/${product.id}`,
                children: `
                    <article>
                        <div class="relative aspect-4/5 overflow-hidden rounded-2xl bg-slate-200">
                            <img src="${product.image}" alt="${product.title}" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                            ${saleBadge}
                        </div>
                        <div class="flex items-start justify-between gap-4 pt-4">
                            <div>
                                <p class="text-lg font-bold text-slate-950">${product.title}</p>
                                <p class="mt-1 text-sm text-slate-500">${product.category}</p>
                            </div>
                            <div class="text-right">
                                <p class="font-bold text-slate-950">${formatPrice(product.price)}</p>
                                ${product.originalPrice ? `<p class="text-xs text-slate-400 line-through">${formatPrice(product.originalPrice)}</p>` : ""}
                            </div>
                        </div>
                        <div class="mt-3 flex items-center justify-between text-sm">
                            <span class="text-amber-500">&#9733; ${product.rating} (${product.reviews})</span>
                            <span class="${stockClass}">${stockLabel}</span>
                        </div>
                    </article>
                `,
                className: "group",
            });
        })
        .join("");

    return `
        <div class="space-y-10 pb-8">
            <section class="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end">
                <div>
                    <p class="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                        The collection
                    </p>
                    <h1 class="mt-2 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                        Shop all products
                    </h1>
                    <p class="mt-3 max-w-xl text-slate-500">
                        Thoughtful pieces for everyday living, selected to last
                        and made to be enjoyed.
                    </p>
                </div>
                <p class="text-sm font-semibold text-slate-500">
                    ${products.length} items
                </p>
            </section>

            <section class="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                ${productCards}
            </section>
        </div>
    `;
};

export default ProductPage;