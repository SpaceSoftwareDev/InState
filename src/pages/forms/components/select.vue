<template>
	<h1>Na aký zámer by ste ju chceli zmeniť?</h1>
	<div class="holder">
		<select>
			<option v-for="option in options" :key="option" :value="option">{{option}}</option>
		</select>
		<button>Vrátiť sa naspať</button>
	</div>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'

const options = [
	"Gymnázium",
	"Elektrotechnická",
	"Strojnícka",
	"Ekonomická",
]
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

.holder {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}
.holder * {
	display: inline-flex;
	margin: 10px;
}

select {
	border: 1px solid #E7E7E9;
	border-radius: 2px;
	background: rgb(251,251,251);
	background: linear-gradient(150deg, rgba(251,251,251,1) 23%, rgba(242,242,242,1) 85%);
	width: 200px;
	height: 55px;
	@apply  text-blueish;
}
</style>