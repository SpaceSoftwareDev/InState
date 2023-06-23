import { createHead } from "@vueuse/head"

export default createHead({
	titleTemplate(title?: string) {
		if (title !== undefined) return `${title} | InState`
		return "InState"
	},
	htmlAttrs: {
		lang: "sk-SK"
	}
})