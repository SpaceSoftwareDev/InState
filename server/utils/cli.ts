import os from "node:os"
import { performance } from "node:perf_hooks"
import { blue, bold, yellow, reset, dim, green, cyan } from "colorette"

performance.measure("server")
const APP_NAME = "InState"

function colorUrl(url: string) {
	return cyan(url.replace(/:(\d+)/, (_, port) => `:${bold(port)}`))
}

function get_links() {
	return Object.values(os.networkInterfaces())
		.flatMap((nInterface) => nInterface ?? [])
		.filter(
			(detail) =>
				detail &&
				detail.address &&
				detail.family === "IPv4" &&
				detail.address !== "127.0.0.1"
		)
		.flatMap((address) => `${address.address}`)[0]
}

export default function server_msg(url: string, https: boolean) {
	console.clear()
	const startup = performance.getEntriesByName("server")[0]
	performance.clearMeasures()

	const isProd = process.env.NODE_ENV === "production"
	const mode = isProd ? blue("●") : yellow("●")

	const startupDurationString = dim(
		`ready in ${reset(bold(Math.ceil(performance.now() - startup.startTime)))} ms`
	)
	const port = url.split(":")[2].replace("/", "")
	const protocol = https ? "https" : "http"

	console.log(`\n  ${green(`${blue(`${bold(APP_NAME)} ${mode}`)}`)}  ${startupDurationString}\n`)
	console.log(`  ${green("➜")}  ${bold("Local")}:   ${colorUrl(url)}`)
	console.log(
		`  ${green("➜")}  ${bold("Network")}: ${colorUrl(`${protocol}://${get_links()}:${port}`)}`
	)
}
