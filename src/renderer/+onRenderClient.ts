import { createApp } from "./app"
import type { PageContext } from "./types"
import type { PageContextBuiltInClientWithServerRouting } from "vite-plugin-ssr/types"

let app: ReturnType<typeof createApp>

type CTXType = PageContextBuiltInClientWithServerRouting & PageContext

async function onRenderClient(pageContext: CTXType) {
	if (!app) {
		app = createApp(pageContext)
		app.mount("#app")
	} else {
		app.changePage(pageContext)
	}
}

export default onRenderClient
