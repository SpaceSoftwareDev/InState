<template>
	<button class="btn orange" @click="state.count++">{{ state.count }}</button>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
const state = reactive({ count: 0 })
</script>
