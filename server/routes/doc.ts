import fs from "fs"
import Twig from 'twig'
import pdf from "html-pdf"
import express from "express"
import { fileURLToPath } from "url"
import path, { dirname } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const doc = express()

doc.post("/doc/:template", (req, res) => {
	try {
		const { template } = req.params
		const vars = req.body

		const templateFile = path.join(__dirname, "../assets", "doc", `${template}.html`)
		if (!fs.existsSync(templateFile)) {
			res.status(404).json({ error: "Not Found" })
			return
		}
		const templateContent = fs.readFileSync(templateFile, 'utf8')

		const html = Twig.twig({data: templateContent}).render(vars)

		const tmpDir = './tmp'
		if (!fs.existsSync(tmpDir)) {
			fs.mkdirSync(tmpDir)
		}

		const pdfFilePath = `./tmp/${template}_${new Date().valueOf()}.pdf`
		const options = { format: "A4", orientation: "portrait" } as pdf.CreateOptions

		pdf.create(html, options).toFile(pdfFilePath, () => {
			fs.readFile(pdfFilePath , function (err, data){
				res.contentType("application/pdf")
				res.status(200).send(data)
			})
		})
	} catch (e) {
		res.status(500).json({ error: "Internal Server Error" })
	}
})

export default doc
