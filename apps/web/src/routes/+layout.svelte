<script lang="ts">
	/**
	 * Site-wide Layout Stuff
	 */

	import '../app.css';
	import '@shoelace-style/shoelace/dist/themes/light.css';

	import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';
	import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

	// import Cognito from '$lib/components/auth/Cognito/index.svelte';

	setBasePath('/shoelace');

	registerIconLibrary('custom', {
		resolver: (name) => `/icons/${name}.svg`
	});
</script>

<slot />
<!-- <Cognito /> -->
