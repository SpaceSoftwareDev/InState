<template>
	<h1>{{ movie.title }}</h1>
	Release Date: {{ new Date(movie.release_date).toLocaleDateString("sk") }}
	<br />
	Director: {{ movie.director }}
	<br />
	Producer: {{ movie.producer }}
</template>

<script lang="ts" setup>
defineProps<{
	movie: { title: string; release_date: string; director: string; producer: string }
}>()
</script>
