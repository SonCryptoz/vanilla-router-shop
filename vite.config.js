// vite.config.js
import { env } from "node:process";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: env.GITHUB_ACTIONS
        ? `/${env.GITHUB_REPOSITORY.split("/")[1]}/`
        : "/",
    plugins: [tailwindcss()],
});
