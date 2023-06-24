<template>
	<section>
		<h1>Vyberte si s čím<br />potrebujete dnes pomoc</h1>

		<div class="grid">
			<Card
				v-for="{ title, icon, desc, href } in data"
				:key="title"
				:title="title"
				:icon="icon"
				:href="href"
				:disabled="href == ''">
				{{ desc }}
			</Card>
		</div>
	</section>
</template>

<script lang="ts" setup>
import * as icons from "@/icons"
import Card from "./Card.vue"
import { shallowRef } from "vue"

const data = shallowRef<
	{
		title: string
		icon: unknown
		desc: string
		href: string
	}[]
>([
	{
		title: "Sťahovanie",
		desc: "Potrebujete pomôcť so sťahovaním?",
		href: "/stahovanie",
		icon: icons.House
	},
	{
		title: "Rodičovstvo",
		desc: "Narodilo sa dieťa, a neviete ako dalej?",
		href: "",
		icon: icons.Baby
	},
	{
		title: "Zmena školy",
		desc: "Chcete vy alebo vaše dieta zmeniť školu ale neviete ako?",
		href: "",
		icon: icons.School
	},
	{
		title: "Prepis auta",
		desc: "Potrebujete pomôcť s prepisom auta?",
		href: "",
		icon: icons.Car
	},
	{
		title: "Strata zamestanosti",
		desc: "Stratili ste prácu a neviete si nájsť novú?",
		href: "",
		icon: icons.Suitcase
	},
	{
		title: "Predaj auta",
		desc: "Potrebujete pomôcť s predajom auta?",
		href: "",
		icon: icons.Car
	}
])
</script>

<style lang="scss" scoped>
h1 {
	color: #1446a7;
	font-size: 56px;
	font-family: Satoshi;
	font-weight: 900;
	margin: 0;
	margin-top: 1rem;
	width: 90vw;
	max-width: 900px;
}

.grid {
	margin-top: 2rem;
	grid-template-columns: repeat(auto-fill, 400px);
	column-gap: 40px;
	row-gap: 20px;
	justify-content: start;
}

@media screen and (max-width: 800px) {
	h1 {
		text-align: center;
		width: 100%;
		font-size: 2rem;
	}
	.grid {
		justify-content: center;
	}
}
</style>
