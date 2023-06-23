<template>
	<h1>Star Wars Movies</h1>
	<ol>
		<button
			class="btn teal"
			v-for="(item, index) in movies"
			:key="item.id"
			@click="click(item.id)">
			<i>{{ index + 1 }}</i>
			<b>{{ item.title }}</b>
			<span>{{
				new Date(item.release_date).toLocaleDateString("sk", {
					year: "numeric"
				})
			}}</span>
		</button>
	</ol>
</template>

<script lang="ts" setup>
import { navigate } from "vite-plugin-ssr/client/router"

defineProps<{
	movies: { id: number; title: string; release_date: string }[]
}>()

const click = async (id: number) => await navigate(`/star-wars/${id}`)
</script>

<style lang="scss" scoped>
ol {
	list-style: none;
	padding: 0;
	display: flex;
	align-items: center;
}
button {
	border: none;
	padding: 0.4rem 10px;
	width: max-content;
	margin: 10px;
	height: 100px;
	transition: all 0.5s ease;
	position: relative;
	@apply flex flex-col justify-end bg-[#242424] rounded-4 cursor-pointer hover:bg-dark-3;

	i {
		position: absolute;
		top: 10px;
		left: 10px;
		opacity: 0.5;
		font-style: normal;
	}

	span {
		opacity: 0.7;
	}
}
</style>
