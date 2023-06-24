<template>
	<section>
		<Upload class="show-icon" />
		<h1>Poďme importovať dáta</h1>
		<p>
			Po kliknutí na tlačítko nižšie vám budú importované vaše osobné údaje ako napr meno,
			email, telefónne číslo, bydlisko zo štátnej datábazy MOU(Manažment osobných údajov)
			<b>(Manažment osobných údajov)</b>
		</p>
		<div class="answers">
			<button @click="navigate('/stahovanie/1')">
				Importovať dáta z MOU
				<Upload class="icon" />
			</button>
		</div>
		<div class="blob"><Upload class="show-icon white" /></div>
	</section>
</template>

<script lang="ts" setup>
import { Upload } from "@/icons"
import { navigate } from "vite-plugin-ssr/client/router"

const emit = defineEmits(["submit"])

function click(answer: number | string) {
	emit("submit", answer)
}
</script>
<style lang="scss" scoped>
section {
	@apply flex flex-col items-center justify-center mt-20 py-2 text-center w-full;
}

button {
	font-size: 1rem !important;
	height: min-content;
	&.white {
		border: 1px solid;
	}

	.icon {
		font-size: 20px;
		margin-right: 0;
		margin-left: 8px;
	}

	&:hover {
		scale: 1.02;
	}
}

.icon {
	font-size: 4rem;
}
h1,
p {
	margin: 0;
	max-width: 800px;
}
p {
	@apply mt-2 color-dark;
	font-size: 1rem;
}
.answers {
	@apply flex mt-12 justify-center;

	button:nth-of-type(even) {
		margin-left: 15px;
	}
}
h1 {
	font-size: 4rem;
	font-weight: 900;
}

.show-icon {
	font-size: 50px;
	scale: 3;
	margin-bottom: 20px;

	&.white {
		color: white !important;
	}
}

.blob {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: -100px;
	background: #1445a74c;
	border-radius: 50%;
	margin: 10px;
	height: 290px;
	width: 290px;

	box-shadow: 0 0 0 0 #1446a71a;
	transform: scale(1);
	animation: pulse 2s infinite;
}

@keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(157, 176, 215, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 100px rgba(157, 176, 215, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}

@media screen and (max-width: 800px) {
	button {
		font-size: 15px !important;
		padding: 12px 12px;
		font-weight: 500;
	}
	.show-icon {
		scale: 1;
		margin-bottom: 0;
	}
}
</style>
