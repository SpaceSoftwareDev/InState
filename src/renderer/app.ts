import { createSSRApp, defineComponent, h, markRaw, reactive } from "vue"
import PageShell from "./PageShell.vue"
import type { Component, PageContext, PageProps } from './types'
import { setPageContext } from "./usePageContext"
import head from "./head"
import "virtual:uno.css"
import "#root/styles/index.scss"

export function createApp(pageContext: PageContext) {
	const { Page } = pageContext

	let rootComponent: Component & { Page: Component; pageProps: PageProps }
	const PageWithWrapper = defineComponent({
		data: () => ({
			Page: markRaw(Page),
			pageProps: markRaw(pageContext.pageProps || {})
		}),
		created() {
			rootComponent = this
		},
		render() {
			return h(
				PageShell,
				{},
				{
					default: () => {
						return h(this.Page, this.pageProps)
					}
				}
			)
		}
	})

	const app = createSSRApp(PageWithWrapper)

	objectAssign(app, {
		changePage: (pageContext: PageContext) => {
			Object.assign(pageContextReactive, pageContext)
			rootComponent.Page = markRaw(pageContext.Page)
			rootComponent.pageProps = markRaw(pageContext.pageProps || {})
		}
	})

	const pageContextReactive = reactive(pageContext)

	setPageContext(app, pageContextReactive)

	app.use(head)

	return app
}

function objectAssign<Obj extends object, Add>(obj: Obj, add: Add): asserts obj is Obj & Add {
	Object.assign(obj, add)
}
