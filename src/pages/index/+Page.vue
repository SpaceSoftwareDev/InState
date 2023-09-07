<template>
	<section>
		<logo class="logo" />
		<h1>Vitajte v InState</h1>
		<p>
			InState je portál na jednoduchú prípravu personalizovaných plánov<br />
			pri zložitých životných situáciách.
		</p>
		<button class="white" @click="init">Iniciovať proces <ArrowRight class="icon" /></button>
	</section>
</template>

<script lang="ts" setup>
import { ArrowRight } from "#/icons"
import logo from "./logo.svg?component"
import { navigate } from "vite-plugin-ssr/client/router"

const init = () => {
	navigate("/start")
}
</script>

<style lang="scss" scoped>
section {
	@apply flex flex-col items-center justify-center text-white mt-20 overflow-hidden;
	width: 90vw;
	max-width: 400px;
	h1 {
		@apply color-blueish text-4xl m-0 font-black;
	}
	p {
		@apply text-gray text-center;
		font-size: 18px;
		font-weight: lighter;
		margin-top: 3rem;
		max-width: 500px;
		margin-bottom: 9rem;
	}
}

.logo {
	@apply text-blueish;
}

button {
	@apply px-6 py-3.2 bg-blueish text-white;

	.icon {
		color: white;
		margin-top: 3px;
		margin-left: 10px;
	}
}

img {
	&.top {
		right: 100px;
		top: -10px;
		position: fixed;
		height: 50dvh;
	}

	&.bottom {
		left: 100px;
		bottom: 0;
		position: fixed;
		height: 50dvh;
	}
}

@media screen and (max-width: 1200px) {
	.top,
	.bottom {
		display: none;
	}
}
</style>
