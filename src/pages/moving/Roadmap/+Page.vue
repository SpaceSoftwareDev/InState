<template>
	<h1>Váš plán je pripravený na stiahnutie</h1>
	<p>
		Váš personalizovaný plán ktorý bol vytvorený podla vaších<br />
		predošlých odpovedí je pripravený na stiahnutie nižšie
	</p>
	<button class="mou" @click="download">
		Stiahnuť plán
	</button>
</template>

<script lang="ts" setup>
import puppeteer from "puppeteer"
import fs from "fs"
import { onBeforeMount } from "vue";

onBeforeMount(async () => {
	// Create a browser instance
	const browser = await puppeteer.launch();

	// Create a new page
	const page = await browser.newPage();

	//Get HTML content from HTML file
	const html = fs.readFileSync('../../../docs/roadmap.html', 'utf-8');
	await page.setContent(html, { waitUntil: 'domcontentloaded' });

	// To reflect CSS used for screens instead of print
	await page.emulateMediaType('screen');

	// Downlaod the PDF
	const pdf = await page.pdf({
	path: 'result.pdf',
	margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
	printBackground: true,
	format: 'A4',
	});

	// Close the browser instance
	await browser.close();
})

function download() {
	const link = document.createElement("a")
	link.href = "/api/plan"
	link.download = "plan.pdf"
	link.click()
}
</script>

<style lang="scss" scoped>
button {
	border: none;
	border-radius: 5rem;
	background: transparent;

	&:hover svg path {
		outline: none;
		filter: drop-shadow(0px 0px 3px var(--glow, #10b981))
			drop-shadow(0px 0px 1px var(--glow, #10b981));
	}
}

.mou {
	@apply bg-blueish;
}

.icon {
	@apply text-dark;
}
</style>
