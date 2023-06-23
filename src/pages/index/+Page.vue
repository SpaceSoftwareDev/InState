<template>
	<section>
		<img :src="logo" class="logo" />
		<p>
			Váš spoločník pri žití <br />
			v Slovenskej Republike
		</p>
		<button class="white" @click="init">
			Iniciovať proces <Icon icon="material-symbols:arrow-right-alt-rounded" class="icon" />
		</button>
	</section>
	<img :src="top" class="top" />
	<img :src="bottom" class="bottom" />
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue"
import logo from "./logo.svg"
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
