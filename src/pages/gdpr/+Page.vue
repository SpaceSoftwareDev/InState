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
			<label class="checkbox">
				<input type="checkbox" v-model="privacyPolicy" />
				<div class="checkmark"></div>
				<p>
					By ticking this box I agree that I have read and comprehended the &nbsp;
					<a>Privacy Policy</a>&nbsp; and all that it entails
				</p>
			</label>
		</div>
		<div>
			<label class="checkbox">
				<input type="checkbox" v-model="termsOfService" />
				<div class="checkmark"></div>
				<p>
					By ticking this box I agree that I have read and comprehended the&nbsp;<a
						>Terms of Service</a
					>
					&nbsp;and all that they entail
				</p>
			</label>
		</div>
	</div>
	<div class="button-holder container-holder">
		<button
			:class="canGoNext ? '' : 'disabled'"
			:disabled="!canGoNext"
			@click="navigate('/upload')">
			Pokračovať <ArrowRight />
		</button>
		<button class="button-right" @click="navigate('/')">Odísť <Logout class="icon" /></button>
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
		margin: 0;
	}

	p {
		color: #0000006d;
		font-weight: 300;
		margin: 0;
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
input[type="checkbox"] {
	width: 20px;
	height: auto;
}

.checkbox input {
	display: none;
}

.checkbox {
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;
	cursor: pointer;
	font-size: 15px;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	margin-top: 10px;

	p {
		margin: 0;
		margin-left: 5px;
		padding: 0;
		padding-bottom: 2px;
	}
}

/* Create a custom checkbox */
.checkmark {
	position: relative;
	top: 0;
	left: 0;
	height: 1.2rem;
	width: 1.2rem;
	background-color: #2196f300;
	border-radius: 0.25em;
	transition: all 0.25s;
}

/* When the checkbox is checked, add a blue background */
.checkbox input:checked ~ .checkmark {
	background-color: #2249a7;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
	content: "";
	position: absolute;
	transform: rotate(0deg);
	border: 0.1em solid black;
	left: 0;
	top: 0;
	width: 1.05em;
	height: 1.05em;
	border-radius: 0.25em;
	transition: all 0.25s, border-width 0.1s;
}

/* Show the checkmark when checked */
.checkbox input:checked ~ .checkmark:after {
	left: 0.45em;
	top: 0.25em;
	width: 0.25em;
	height: 0.5em;
	border-color: #fff0 white white #fff0;
	border-width: 0 0.15em 0.15em 0;
	border-radius: 0em;
	transform: rotate(45deg);
}
</style>
