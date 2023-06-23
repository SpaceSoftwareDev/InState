import { inject } from "vue"
import type { App } from "vue"
import { PageContext } from "./types"

const key = Symbol()

export function usePageContext(): PageContext {
	const pageContext = inject(key) as PageContext
	return pageContext
}

export function setPageContext(app: App, pageContext: PageContext) {
	app.provide(key, pageContext)
}
