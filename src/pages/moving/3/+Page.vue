<template>
	<section>
		<h1>Zvolte novú lokáciu vášho bývania</h1>
		<p>Nižšie si zvolte lokáciu vášho nového bývania</p>
		<div class="map">
			<div class="test">
				<div class="wrapper">
					<component :is="MarkerPin" class="pin" />
					<input
						v-model="input"
						type="text"
						placeholder="Zadajte adresu nového bývania..."
						disabled />
				</div>
				<button @click="click()" class="continue">
					Pokračovať<ArrowRight class="icon" />
				</button>
			</div>
			<div class="map-size">
				<div id="embedded-map-display" style="height: 100%; width: 100%; max-width: 100%">
					<iframe
						class="rounded-md"
						style="height: 100%; width: 100%; border: 0"
						frameborder="0"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						:src="`https://www.google.com/maps/embed/v1/place?q=${search},+Slovensko&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`" />
				</div>
				<a
					class="google-map-code-enabler"
					href="https://www.bootstrapskins.com/themes"
					id="grab-map-data">
					premium bootstrap themes</a
				>
			</div>
		</div>
	</section>
</template>
<script lang="ts" setup>
import { navigate } from "vite-plugin-ssr/client/router"
import { ref } from "vue"
import { watchDebounced } from "@vueuse/core"
import { ArrowRight, MarkerPin } from "@/icons"

const search = ref("Šafárikova 5 Senec")
const input = ref("Šafárikova 5 Senec")
watchDebounced(
	input,
	() => {
		search.value = input.value
	},
	{
		debounce: 1000
	}
)

function click() {
	navigate("/stahovanie/4")
}
</script>
<style lang="scss">
#embedded-map-display.text-marker.map-generator {
	max-width: 100%;
	max-height: 100%;
	background: none;
}

section {
	max-height: 100%;
	height: fit-content;
}
h1,
p {
	margin: 0;
}
h1 {
	font-size: 4rem;
	font-weight: 900;
}
p {
	@apply mt-2 color-dark;
}
input {
	@apply: px-5 pr-11;
	min-height: 64px;
	min-width: 316px;
	border-radius: 12px;
	border: 2px solid #6c6c6c;
	font-size: 1rem;
	background-color: rgb(214, 214, 214);

	&:hover {
		cursor: not-allowed;
	}
}
.pin {
	position: absolute;
	right: 5%;
	top: 30%;
	color: rgba(0, 0, 0, 0.7);
}
.wrapper {
	@apply: mt-10;
	position: relative;
	width: fit-content;
}
.map {
	display: flex;
	justify-content: center;
	margin-left: 0;
	position: relative;
	isolation: isolate;
}

.test {
	position: absolute;
	right: 40px;
	margin-top: 20px;
	z-index: 5;
	button {
		&.continue {
			margin-top: 30px;
			float: right;
		}
	}
}

.map-size {
	overflow: hidden;
	resize: none;
	width: 93vw;
	height: 500px;
	margin-top: 30px;
}

@media screen and (max-width: 800px) {
	h1 {
		text-align: center;
		font-size: 2rem;
	}
	p {
		text-align: center;
	}

	.map {
		margin-top: 70px;
		height: 50px;
	}

	.test {
		bottom: 0;
		top: -110px;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		left: 0;

		button {
			&.continue {
				float: left;
				margin-top: 330px;
				width: 93vw;
			}
		}

		input {
			width: 93vw;
		}
	}

	.map-size {
		height: 300px;
	}
}
</style>
