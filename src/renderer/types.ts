import type {
	PageContextBuiltIn,
	PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
} from "vite-plugin-ssr/types"
import type { ComponentPublicInstance } from "vue"

export type Component = ComponentPublicInstance

type Page = Component
export type PageProps = Record<string, unknown>

export type PageContextCustom = {
	Page: Page
	pageProps?: PageProps
	config: {
		title?: string
	}
	title?: string
}

export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom
export type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom

export type PageContext = PageContextClient | PageContextServer
