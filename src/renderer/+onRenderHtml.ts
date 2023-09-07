export default onRenderHtml

import { renderToNodeStream } from "vue/server-renderer"
import { renderHeadToString } from "@vueuse/head"

import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server"
import { createApp } from "./app"
import head from "./head"
import type { PageContext } from "./types"
import type { PageContextBuiltInServer } from "vite-plugin-ssr/types"

async function onRenderHtml(pageContext: PageContextBuiltInServer & PageContext) {
	const app = createApp(pageContext)
	const stream = renderToNodeStream(app)
	const { headTags, htmlAttrs, bodyAttrs, bodyTags } = await renderHeadToString(head)

	const documentHtml = escapeInject`<!DOCTYPE html>
	<html${htmlAttrs}>
		<head>
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
			<link rel="manifest" href="/site.webmanifest">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			${dangerouslySkipEscape(headTags)}
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
