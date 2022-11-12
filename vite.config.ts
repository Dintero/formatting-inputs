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
            formats: ["es"],
            fileName: "formatting-inputs.js",
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["react", "react-dom"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
});
