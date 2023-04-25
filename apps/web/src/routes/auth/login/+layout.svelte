<script lang="ts">
	import HeaderBar from '$lib/components/HeaderBar/index.svelte';
	import FooterBar from '$lib/components/FooterBar/index.svelte';
</script>

<div class="w-full h-full font-normal flex flex-col justify-between items-center">
	<HeaderBar />
	<div class="container h-full">
		<slot />
	</div>
	<FooterBar />
</div>
