export default onRenderHtml

import { renderToNodeStream } from "vue/server-renderer"
import { renderHeadToString } from "@vueuse/head"

import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server"
import { createApp } from "./app"
import head from "./head"
import type { PageContext } from "./types"
import type { PageContextBuiltIn } from "vite-plugin-ssr/types"

async function onRenderHtml(pageContext: PageContextBuiltIn & PageContext) {
	const app = createApp(pageContext)
	const stream = renderToNodeStream(app)
	const { headTags, htmlAttrs, bodyAttrs, bodyTags } = await renderHeadToString(head)

	const documentHtml = escapeInject`<!DOCTYPE html>
	<html${htmlAttrs}>
		<head>
			${dangerouslySkipEscape(headTags)}
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		</head>
		<body${bodyAttrs}>
			<div id="app">${stream}</div>
			${bodyTags}
		</body>
	</html>`

	return {
		documentHtml,
		pageContext: {
			enableEagerStreaming: true
		}
	}
}
