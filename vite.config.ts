import vue from "@vitejs/plugin-vue"
import ssr from "vite-plugin-ssr/plugin"
import UnoCSS from "unocss/vite"
import svgLoader from "vite-svg-loader"
import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"

// #region Vue 3.3 + tsx loader fix
const __defProp = Object.defineProperty
const __name = (target: unknown, value: unknown) =>
	__defProp(target, "name", { value, configurable: true })
declare global {
	function __name(target: unknown, value: unknown): unknown
}
globalThis.__name = __name
// #endregion

export default defineConfig({
	plugins: [vue(), UnoCSS(), ssr(), svgLoader()],
	optimizeDeps: { include: ["cross-fetch", "vue", "unocss"] },
	resolve: {
		alias: {
			"#root": fileURLToPath(new URL("./src", import.meta.url)),
			"@": fileURLToPath(new URL("./src", import.meta.url))
		}
	}
})
