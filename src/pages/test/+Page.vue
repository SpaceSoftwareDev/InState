<template>
	<Test
		:icon="IDCard"
		title="Vlastníte EOP?"
		description="Vlastníte Elektornický Občiansky Preukaz?"
		answer1="Áno, mám"
		answer2="Nie, nemám" />
</template>
<script lang="ts" setup>
import { IDCard } from "../../icons"
import Test from "#root/pages/forms/components/Simple.vue"
</script>
<style lang="scss" scoped></style>
