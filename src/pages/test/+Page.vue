<template>
	<Test
		:icon="IDCard"
		title="Vlastníte EOP?"
		description="Vlastníte Elektornický Občiansky Preukaz?"
		answer1="Áno, vlastním"
		answer2="Nie, nevlastním" />
</template>
<script lang="ts" setup>
import { IDCard } from "@/icons"
import Test from "@/pages/forms/components/Simple.vue"
</script>
<style lang="scss" scoped></style>
