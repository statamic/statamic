import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        plugins: [
            tailwindcss(),
            laravel({
                refresh: true,
                input: ["resources/css/site.css", "resources/js/site.js"],
            }),
        ],
    };
});
