import express from "express"
import { listen } from "listhen"

import { renderPage } from "vite-plugin-ssr/server"

import api from "./api"

import server_msg from "./utils/cli"

import body from "body-parser"
import sirv from "sirv"
import compression from "compression"

import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = `${__dirname}/..`

const isProd = process.env.NODE_ENV === "production"

async function startServer() {
	const app = express()
	app.use(compression())
	app.use(body.json())
	app.use(body.urlencoded({ extended: true }))

	app.use(api)

	if (isProd) app.use(sirv(`${root}/dist/client`))
	else {
		app.use(sirv(`${root}/public`))
		const vite = await import("vite")
		const viteDev = (
			await vite.createServer({
				root,
				server: { middlewareMode: true }
			})
		).middlewares
		app.use(viteDev)
	}

	app.get("*", async (req, res, next) => {
		const { httpResponse } = await renderPage({
			urlOriginal: req.originalUrl
		})
		if (!httpResponse) return next()
		const { getBody, statusCode, contentType, earlyHints } = httpResponse
		if (res.writeEarlyHints)
			res.writeEarlyHints({
				link: earlyHints.map((e) => e.earlyHintLink)
			})
		res.status(statusCode)
			.type(contentType)
			.send(await getBody())
	})

	const port = process.env.PORT || 3000
	const { url, https } = await listen(app, {
		port,
		autoClose: true,
		showURL: false
	})
	server_msg(url, !!https)
}

startServer()
