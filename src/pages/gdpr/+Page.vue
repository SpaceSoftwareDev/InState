<template>
	<div class="icon-holder">
		<GDPR class="icon" />
	</div>
	<h1>Predtým než začneme</h1>
	<div class="container">
		<h3>Privacy policy & GDPR</h3>
		<p>
			This privacy policy aims to give you information on how Showcase collects and processes
			your personal data through your use of this website, including any data you may provide
			through this website when you sign up to our mailing list, purchase a product or service
			or take part in a competition. This website is not intended for children and we do not
			knowingly collect data relating to children. It is important that you read this privacy
			policy together with any other privacy policy or fair processing notice we may provide
			on specific occasions when we are collecting or processing personal data about you so
			that you are fully aware of how and why we are using your data. This privacy policy
			supplements the other notices and is not intended to override them. Your acceptance of
			this privacy policy is deemed to occur upon your first use of our Site. If you do not
			accept and agree with this Privacy Policy, you must stop using our Site immediately.
		</p>
	</div>
	<div class="container-holder">
		<div>
			<input v-model="privacyPolicy" type="checkbox" />
			<label
				>By ticking this box I agree that I have read and comprehended the
				<a>Privacy Policy</a> and all that it entails</label
			>
		</div>
		<div>
			<input v-model="termsOfService" type="checkbox" />
			<label
				>By ticking this box I agree that I have read and comprehended the
				<a>Terms of Service</a> and all that they entail</label
			>
		</div>
	</div>
	<div class="button-holder container-holder">
		<button
			:class="canGoNext ? '' : 'disabled'"
			:disabled="!canGoNext"
			@click="navigate('/upload')">
			Pokračovať <ArrowRight />
		</button>
		<button class="button-right">Odísť <Logout class="icon" /></button>
	</div>
</template>
<script setup lang="ts">
import { GDPR, ArrowRight, Logout } from "../../icons"
import { computed } from "vue"
import { ref } from "vue"
import { navigate } from "vite-plugin-ssr/client/router"

const privacyPolicy = ref(false)
const termsOfService = ref(false)

const canGoNext = computed(() => {
	return privacyPolicy.value && termsOfService.value
})
</script>
<style lang="scss" scoped>
h1 {
	@apply text-blueish;
	font-size: 3.5rem;
	text-align: center;
}
.container {
	h3 {
		color: #000000;
		font-size: 2em;
		font-weight: 400;
	}

	p {
		color: #0000006d;
		font-weight: 300;
	}

	border: 2px solid #e7e7e9;
	border-radius: 8px;
	padding: 20px;
	margin: auto;
	max-width: 800px;
}

.container-holder {
	margin: auto;
	max-width: 800px;
}

label {
	color: #000000;
}

input {
	margin-right: 20px;
	margin-top: 15px;
}

a {
	@apply text-blueish;
}

.icon-holder {
	display: flex;
	justify-content: center;
}

.button-holder {
	display: flex;
	margin-top: 20px;
	margin-bottom: 40px;
}

.button-right {
	margin-left: 20px;
	@apply bg-white text-blueish;
	border: 2px solid #1446a7;

	.icon {
		@apply text-blueish;
	}
}

svg {
	margin-left: 10px;
}

.disabled {
	@apply bg-gray-300;
}
</style>
