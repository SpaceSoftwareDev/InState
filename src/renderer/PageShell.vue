<template>
	<div class="layout">
		<nav class="navigation">
			<div class="center">
				<a href="/" :draggable="false" class="logo">
					<img :src="logo" :draggable="false" height="30" width="30" />
				</a>
				<Link class="link" href="/">Welcome</Link>
				<Link class="link" href="/star-wars">Data Fetching</Link>
				<Link class="link" href="/test">Tests</Link>
			</div>
		</nav>
		<main class="content" ref="content">
			<slot />
		</main>
	</div>
</template>

<script lang="ts" setup>
import Link from "./Link.vue"
import logo from "./logo.svg"
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	flex-direction: column;
}
.content {
	padding: 20px;
	padding-bottom: 50px;
}

.loader {
	display: none;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}

.navigation {
	@apply bg-[#1a1a1a] py-0 px-3;
	border-bottom: 1px solid rgba(84, 84, 84, 0.48);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	line-height: 1.8em;

	.link {
		height: 100%;
	}
}

.center {
	@apply flex flex-row items-center;
}

.logo {
	width: 30px;
	height: 30px;
	margin-left: 5px;
	margin-right: 10px;
	user-select: none;
}
</style>
