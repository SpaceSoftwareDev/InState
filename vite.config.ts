import vue from "@vitejs/plugin-vue"
import ssr from "vite-plugin-ssr/plugin"
import UnoCSS from "unocss/vite"
import svgLoader from "vite-svg-loader"
import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [vue(), UnoCSS(), svgLoader(), ssr({ prerender: true })],
	optimizeDeps: { include: ["cross-fetch", "vue", "unocss"] },
	resolve: {
		alias: {
			"#": fileURLToPath(new URL("./src", import.meta.url))
		}
	}
})
