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
					<button class="mou" @click="navigate('/api/v1/doc/roadmap')">
						Stiahnuť plán&nbsp;<Download class="icon" />
					</button>
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
				<p>1. Je povinné nahlásiť osobne na Mestskom obecnom uráde v meste Senec<br /></p>
				<div class="line" />
				<h3>Pri osobnom ohlásení budete potrebovať:</h3>
				<p>
					1. Občiansky preukaz<br />
					2. V pripáde neúčasti vlastníka bytu je potrebný písomný súhlas
					vlastníka/vlastníkov s prihlásením sa na trvalý pobyt (s úradne overenými
					podpismi)<br />
					3. V prípade vašeho dieťaťa Šimon Tkáč je potrebné predložiť rodný list a
					prítomnosť rodiča<br />
					4. Pri návrate zo zahraničia cestovný doklad alebo osvedčenie o štátnom
					občianstve<br />
				</p>
				<div class="line" />
				<h3>Nový občiansky preukaz:</h3>
				<p>
					1. Po zmene trvalého pobytu ste povinný požiadať o vydanie nového občianskeho
					preukazu do 30 dní od tejto udalosti.<br />
					2. O nový občiansky preukaz je potrebné požiadať na okresnom riaditeľstve
					Policajného zboru. Lokalita policajného zboru v Seneci sa nachádza
					<a>tu na mape</a>.<br /><br />
					<b>Doporučujeme vyplniť rezerváciu na webe:</b><br />
					<a href="https://shorturl.at/crDQW">https://shorturl.at/crDQW</a> <br /><br />
					3. Je tiež pritom potrebné priniesť aj svoj starý občiansky preukaz. <br />
					4. Lehota na vydanie dokladu je 30 dní. <br />
					5. Poplatok za vydanie nového občianskeho preukazu je 4,50 eura. <br />
					6. Ak v žiadosti o nový preukaz uvediete svoju e-mailovú adresu alebo číslo
					mobilného telefónu, bude vám zaslaná správa o tom, že občiansky preukaz je
					pripravený na prevzatie.<br />
				</p>
				<div class="line" />
				<h3>Nahlásenie zmeny zamestnávatelovi:</h3>
				<p>
					1. Zmenu trvalého pobytu je potrebné nahlásiť aj svojmu zamestnávateľovi. Pokiaľ
					ste evidovaní na Úrade práce, socialných vecí a rodiny SR, musíte nahlásiť túto
					zmenu aj na príslušnom úrade.
				</p>
				<div class="line" />
				<h3>Ostatné inštitúcie:</h3>
				<p>
					1. Zmenu trvalého bydliska je nutné nahlásiť všetkým, od koho by vám mohla
					príjsť listová zásielka<br />
					2.Napríklad dodávatelia energií, mobilní operátori, poskytovatelia televízie a
					internetu a podobne. Zmeny je najlepšie oznamovať už s novým občianskym
					preukazom.<br />
				</p>
				<div class="line" />
				<h3>Vaše deti:</h3>
				<p class="mb-0"><b>1. Šimon Tkáč</b></p>
				<ul>
					<li>
						<p>
							Zoznam stredných škôl - Gymnázii v meste Senec:Gymnázium Antona
							Bernolákae
						</p>
					</li>
					<li>
						<p>
							Zoznam pediatrov v meste senec:MUDr. Danka Grambličková - Pediakard
							s.r.o
						</p>
					</li>
					<li class="ml-5"><p>Je potrebné vybavenie nového OP</p></li>
					<li class="ml-5">
						<p>Rodný list dieťaťa Šimon Tkáč nájdete <a href="">tu</a></p>
					</li>
				</ul>
				<h3>Dokumenty:</h3>
				<p>Žiadost o prestup na inú skolu sa nachadza <a href="">tu</a></p>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
import { navigate } from "vite-plugin-ssr/client/router"
import { Download, Printer, Mail } from "@/icons"
</script>

<style lang="scss" scoped>
section {
	height: max-content;
	padding-bottom: 20px;
	max-height: 90vh;
	overflow-y: scroll;
	padding-bottom: 6rem;

	&:first-of-type {
		overflow: visible;
		padding-bottom: 0;
	}
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
		margin-bottom: 5px;
		margin: 0;
	}

	p {
		margin: 0;
		margin-bottom: 1rem;
		color: black;
		font-weight: 300;
	}

	ul,
	li {
		color: black;
		list-style: circle;

		p {
			margin: 0;
			padding: 0;
		}
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
		max-height: 100000px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		overflow: hidden;
	}

	ul {
		padding: 0;
	}

	li {
		text-align: start;
	}
}
</style>
