import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
	base: "/mxm-kanban/",

	plugins: [
		react(),
		legacy({
			targets: ["defaults", "not IE 11"]
		})
	],

	resolve: {
		alias: [
			{
				find: "core",
				replacement: fileURLToPath(new URL("./src", import.meta.url))
			}
		]
	}
});
