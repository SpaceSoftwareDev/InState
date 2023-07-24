import { createApp } from "./app"
import type { PageContext } from "./types"
import type { PageContextBuiltInClientWithServerRouting as PageContextBuiltIn } from "vite-plugin-ssr/types"

let app: ReturnType<typeof createApp>
async function onRenderClient(pageContext: PageContextBuiltIn & PageContext) {
	if (!app) {
		app = createApp(pageContext)
		app.mount("#app")
	} else {
		app.changePage(pageContext)
	}
}

export default onRenderClient
