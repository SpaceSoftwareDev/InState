<template>
	<section>
		<logo class="logo" />
		<p>
			Váš spoločník pri žití <br />
			v Slovenskej Republike
		</p>
		<button class="white" @click="init">Iniciovať proces <ArrowRight class="icon" /></button>
	</section>
	<img :src="top" class="top" />
	<img :src="bottom" class="bottom" />
</template>

<script lang="ts" setup>
import { ArrowRight } from "@/icons"
import logo from "./logo.svg?component"
import top from "./top.webp"
import bottom from "./bottom.webp"
import { navigate } from "vite-plugin-ssr/client/router"

const init = () => {
	navigate("/start")
}
</script>

<style lang="scss" scoped>
section {
	@apply flex flex-col items-center justify-center text-white mt-20;
	width: 90vw;
	max-width: 500px;
	p {
		@apply text-white text-center;
		font-size: 36px;
		font-weight: lighter;
		margin-top: 2.5rem;
		margin-bottom: 9rem;
	}
}

button {
	@apply px-6 py-3.2;

	.icon {
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
