<template>
	<section>
		<h1>Zvolte novú lokáciu vášho bývania</h1>
		<p>Nižšie si zvolte lokáciu vášho nového bývania</p>
		<div>
			<aside>
				<div
					style="
						overflow: hidden;
						resize: none;
						max-width: 100%;
						width: 500px;
						height: 500px;
					">
					<div
						id="embedded-map-display"
						style="height: 100%; width: 100%; max-width: 100%">
						<iframe
							style="height: 100%; width: 100%; border: 0"
							frameborder="0"
							src="https://www.google.com/maps/embed/v1/search?q=Bratislava,+Slovensko&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
					</div>
					<a
						class="google-map-code-enabler"
						href="https://www.bootstrapskins.com/themes"
						id="grab-map-data"
						>premium bootstrap themes</a
					>
				</div>
			</aside>
			<div class="wrapper">
				<component :is="MarkerPin" class="pin" />
				<input type="text" placeholder="Zadaj miesto požadovanej lokality..." />
			</div>

			<button>Pokračovať<ArrowRight class="icon" /></button>
		</div>
	</section>
</template>
<script lang="ts" setup>
import { ArrowRight } from "#root/icons"
import { MarkerPin } from "../../icons"
</script>
<style lang="scss">
#embedded-map-display.text-marker.map-generator {
	max-width: 100%;
	max-height: 100%;
	background: none;
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
	border: 2px solid #d8d8d8;
	font-size: 1rem;
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
aside {
	float: right;
}
</style>
