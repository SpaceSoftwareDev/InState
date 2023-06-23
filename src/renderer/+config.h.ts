import type { Config } from "vite-plugin-ssr/types"
import { onPageTransitionStart, onPageTransitionEnd } from "./onPageTransitionHooks"

export default {
	passToClient: ["pageProps", "documentProps"],
	clientRouting: true,
	prefetchStaticAssets: "viewport",
	onPageTransitionStart,
	onPageTransitionEnd
} satisfies Config
