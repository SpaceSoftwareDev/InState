import fs from "fs"
import express from "express"
import { fileURLToPath } from "url"
import path, { dirname } from "path"
import { convertJsonLdToJson, isJsonLd, JsonObject } from "../utils/json"

const __dirname = dirname(fileURLToPath(import.meta.url))
const mou = express()

mou.get("/mou/:document", (req, res) => {
	const { document } = req.params
	const documentPath = path.join(__dirname, "../assets", "mou", `${document}.json`)

	try {
		if (!fs.existsSync(documentPath)) {
			res.status(404).json({ error: "Not Found" })
			return
		}

		const documentData = fs.readFileSync(documentPath)

		let documentJSON = JSON.parse(documentData.toString()) as JsonObject
		// if (isJsonLd(documentJSON)) {
		// 	documentJSON = convertJsonLdToJson(documentJSON)
		// }

		res.status(200).json(documentJSON)
	} catch (e) {
		res.status(500).json({ error: "Internal Server Error" })
	}
})

export default mou