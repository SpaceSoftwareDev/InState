<template>
	<h1>Váš plán je pripravený na stiahnutie</h1>
	<p>
		Váš personalizovaný plán ktorý bol vytvorený podla vaších<br />
		predošlých odpovedí je pripravený na stiahnutie nižšie
	</p>
</template>

<script lang="ts" setup></script>

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
