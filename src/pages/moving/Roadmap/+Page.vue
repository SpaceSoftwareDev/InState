<template>
	<section>
		<h1>Váš plán je pripravený na stiahnutie</h1>
		<p>
			Váš personalizovaný plán ktorý bol vytvorený podla vaších<br />
			predošlých odpovedí je pripravený na stiahnutie nižšie
		</p>
		<button class="mou"><Download class="icon" />Stiahnuť plán</button>
	</section>
</template>

<script lang="ts" setup>
import { Download } from "@/icons"
</script>

<style lang="scss" scoped>
section {
	height: max-content;
	padding-bottom: 20px;
	max-height: 1000px;
}

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
	@apply bg-blueish mt-10;

	.icon {
		margin-right: 10px;
		@apply text-white;
	}
}

.icon {
	@apply text-dark;
}
</style>
