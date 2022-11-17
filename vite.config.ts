import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts({ insertTypesEntry: true })],
    build: {
        lib: {
            entry: resolve(__dirname, "src/components/index.ts"),
            name: "FormattingInputs",
            formats: ["es", "umd"],
            fileName: (format) => `formatting-inputs.${format}.js`,
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
});
