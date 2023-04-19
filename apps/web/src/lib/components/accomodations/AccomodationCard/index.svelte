<script lang="ts">
	import '@shoelace-style/shoelace/dist/components/card/card.js';
	// import type { PageData } from './$types';
	function fetchData() {
		fetch("http://staycay-api-lb-1752034959.ap-southeast-1.elb.amazonaws.com/")
			.then(response => response.json())
			.then(data => {
				console.log(data);
				alert(data);
			}).catch(error => {
				console.log(error);
				return [];
			});
	}
	// export let data: PageData;
</script>

<div class="w-full flex flex-row justify-between p-5">
	<sl-card class="card-overview">
		<img
			slot="image"
			src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
			alt="A kitten sits patiently between a terracotta pot and decorative grasses."
		/>

		<strong>Mittens</strong><br />
		This kitten is as cute as he is playful. Bring him home today!<br />
		<small>6 weeks old</small>

		<div slot="footer">
			<sl-button variant="primary" pill on:click|once={fetchData}>More Info</sl-button>
			<sl-rating />
		</div>
	</sl-card>

	<style>
		.card-overview {
			max-width: 300px;
		}

		.card-overview small {
			color: var(--sl-color-neutral-500);
		}

		.card-overview [slot='footer'] {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	</style>
</div>
