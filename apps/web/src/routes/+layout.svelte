<script lang="ts">
	/**
	 * Site-wide Layout Stuff
	 */

	import '../app.css';
	import '@shoelace-style/shoelace/dist/themes/light.css';

	import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';
	import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

	import { signOut } from "@auth/sveltekit/client"
  	import { page } from "$app/stores"

	// import Cognito from '$lib/components/auth/Cognito/index.svelte';

	setBasePath('/shoelace');

	registerIconLibrary('custom', {
		resolver: (name) => `/icons/${name}.svg`
	});
</script>

<div>
	<header>
	  {#if $page.data.session}
		<div>
		  <strong>Hello {$page.data.session.user?.name}</strong>
		  <button on:click|preventDefault={signOut} class="button">Sign out</button>
		</div>
	  {:else}
		<a href="/auth/login" class="buttonPrimary">Sign in</a>
	  {/if}
	</header>
	<slot />
</div>

<!--<slot /> -->
<!-- <Cognito /> -->
