import fs from "fs"
import express from "express"
import { fileURLToPath } from "url"
import path, { dirname } from "path"
import { convertJsonLdToJson, isJsonLd, JsonObject } from "../utils/json"
import puppeteer from "puppeteer"
const __dirname = dirname(fileURLToPath(import.meta.url))
const doc = express()

async function printPDF() {
	const browser = await puppeteer.launch({
		headless: true
	})

	  // create a new page
	const page = await browser.newPage()

	// set your html as the pages content
	const html = fs.readFileSync('./assets/doc/roadmap.html', 'utf8')
	await page.setContent(html, {
		waitUntil: 'domcontentloaded'
	})

	  // create a pdf buffer
	const pdfBuffer = await page.pdf({
		format: 'A4'
	})

	  // or a .pdf file
	await page.pdf({
		format: 'A4',
		path: `../assets/doc/roadmap.pdf`
	})

	// close the browser
	await browser.close()
}


doc.get("/doc/:name", (req, res) => {

	try {
		printPDF()
		res.status(200).json({ success: true })
	} catch (e) {
		res.status(500).json({ error: "Internal Server Error" })
	}
})

export default doc
