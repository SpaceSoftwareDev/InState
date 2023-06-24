import { createHead } from "@vueuse/head"

export default createHead({
	titleTemplate(title?: string) {
		if (title !== undefined) return `${title} | Instate`
		return "Instate"
	},
	htmlAttrs: {
		lang: "sk-SK"
	}
})
