<template>
	<div class="page" v-if="is404">
		<h1>404 Page Not Found</h1>
		<p>This page could not be found.</p>
		<p>{{ errorInfo }}</p>
	</div>
	<div class="page" v-else>
		<h1>500 Internal Server Error</h1>
		<p>Something went wrong.</p>
	</div>
</template>

<script lang="ts" setup>
defineProps(["is404", "errorInfo"])
</script>

<style lang="scss" scoped>
.page {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
