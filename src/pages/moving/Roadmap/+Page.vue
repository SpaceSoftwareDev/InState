<template>
	<div class="flex flex-row main">
		<section class="w-[50%] half">
			<h1>
				Váš plán je pripravený<br />
				na stiahnutie
			</h1>
			<p>
				Váš personalizovaný plán ktorý bol vytvorený podla vaších<br />
				predošlých odpovedí je pripravený na stiahnutie nižšie
			</p>
			<div class="col">
				<div class="row">
					<button class="mou">Stiahnuť plán&nbsp;<Download class="icon" /></button>
					<button class="email">Poslať na email&nbsp;<Mail class="icon" /></button>
				</div>
				<button class="print">Tlačiť&nbsp;<Printer class="icon" /></button>
			</div>
		</section>
		<section class="w-[50%] half">
			<div class="paper">
				<h2>Personalizovaný plán</h2>
				<div class="line" />
				<h3>Zmena trvalého pobytu:</h3>
				<p>
					1. Je povinné nahlásiť osobne na Mestskom obecnom uráde v meste ktoré bolo
					zadané pri otázke “kde sa sťahujete” <br />
				</p>
				<div class="line" />
				<h3>Pri osobnom ohlásení budete potrebovať</h3>
				<p>
					1. Občiansky preukaz <br />
					2. V pripáde neúčasti vlastníka bytu je potrebný písomný súhlas
					vlastníka/vlastníkov s prihlásením sa na trvalý pobyt (s úradne overenými
					podpismi) <br />
					3. V prípade vašeho dieťaťa do 15 rokov je potrebné predložiť rodný list a
					prítomnosť rodiča <br />
					4. Pri návrate zo zahraničia cestovný doklad alebo osvedčenie o štátnom
					občianstve <br />
				</p>
				<div class="line" />
				<h3>Nový občiansky preukaz</h3>

				<div class="line" />
				<h3>Nahlásenie zmeny zamestnávatelovi</h3>

				<div class="line" />
				<h3>Ostatné inštitúcie</h3>

				<h3>Vaše deti</h3>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
import { Download, Printer, Mail } from "@/icons"
</script>

<style lang="scss" scoped>
section {
	height: max-content;
	padding-bottom: 20px;
	max-height: 1000px;
}

h1 {
	font-size: 56px;
	font-family: Satoshi;
	font-weight: 900;
	margin: 0;
}

.paper {
	@apply border-[0.5] border-[#E7E7E9] border-solid w-full rounded-xl p-8;

	h2 {
		margin: 0;
		color: black;
		font-weight: 500;
	}

	h3 {
		color: black;
		font-weight: 400;
		margin: 0;
	}

	p {
		margin: 0;
		margin-bottom: 1rem;
		color: black;
		font-weight: 300;
	}

	.line {
		width: 100%;
		height: 1px;
		margin: 1.2rem auto;
		margin-bottom: 1rem;
		background-color: rgba(0, 0, 0, 0.3);
		border: 1px;
	}
}

.col {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: fit-content;

	color: black;

	.row {
		color: black;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.print {
		width: calc(100% - 0.5rem);
		margin-left: 0;
	}
}

button {
	box-sizing: border-box;
	@apply rounded-md text-blueish border-[0.25] border-blueish border-solid m-2;
	background: transparent;

	&:hover {
		@apply bg-blueish text-white;
	}

	.icon {
		color: inherit;
	}
}

.mou {
	@apply bg-blueish text-white ml-0;

	.icon {
		@apply text-inherit;
	}

	&:hover {
		@apply bg-white text-blueish;
	}
}

.icon {
	@apply text-dark m-0;
}

@media screen and (max-width: 1000px) {
	div.main {
		flex-direction: column;
	}

	.half {
		width: 100%;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		overflow: hidden;
	}
}
</style>
