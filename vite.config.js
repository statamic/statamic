import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        build: {
            rollupOptions: {
                output: {
                    manualChunks: (id) => {
                        if (id.includes("node_modules"))
                            return id
                                .toString()
                                .split("node_modules/")[1]
                                .split("/")[0]
                                .toString();
                    },
                },
            },
        },
        plugins: [
            tailwindcss(),
            laravel({
                refresh: true,
                input: ["resources/css/site.css", "resources/js/site.js"],
            }),
        ],
        server: {
            open: env.APP_URL,
        },
    };
});
