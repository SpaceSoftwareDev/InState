<template>
	<component :is="icon" class="icon" />
	<h1>Na aký zámer by ste ju chceli zmeniť?</h1>
	<div class="container">
		<select>
			<option v-for="(option, index) in options" :key="index" :value="option">
				{{ option }}
			</option>
		</select>
		<button>Vrátiť sa naspať</button>
	</div>
</template>
<script lang="ts" setup>
const props = defineProps<{
	title: string
	icon: unknown
	options: { text: string }[]
}>()
</script>
<style lang="scss" scoped>
h1 {
	text-align: center;
}

button {
	@apply bg-white text-blueish border-blueish;
	border: 1px solid;
	border-radius: 2px;
	font-size: 1em;
}

.icon {
	font-size: 2rem;
}

.container {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}
.container * {
	display: inline-flex;
	margin: 10px;
}

select {
	border: 1px solid #e7e7e9;
	border-radius: 2px;
	background: rgb(251, 251, 251);
	background: linear-gradient(150deg, rgba(251, 251, 251, 1) 23%, rgba(242, 242, 242, 1) 85%);
	width: 200px;
	height: 55px;
	@apply text-blueish;
}

.icon-container {
	display: flex;
	justify-content: center;

	.icon {
		font-size: 3rem;
	}
}
</style>
