<script lang="ts">
	import { onMount } from 'svelte';
	import * as jose from 'jose';
	import type { PageData } from './$types';
	export let data: PageData;

	// onMount(async () => {
	// 	(function (d, s, id) {
	// 		var js,
	// 			fjs = d.getElementsByTagName(s)[0];
	// 		if (d.getElementById(id)) {
	// 			return;
	// 		}
	// 		js = d.createElement(s);
	// 		js.id = id;
	// 		js.src = 'https://connect.facebook.net/en_US/sdk.js';
	// 		fjs.parentNode.insertBefore(js, fjs);
	// 	})(document, 'script', 'facebook-jssdk');

	// 	window.fbAsyncInit = function () {
	// 		FB.init({
	// 			appId: '{your-app-id}',
	// 			cookie: true,
	// 			xfbml: true,
	// 			version: '{api-version}'
	// 		});

	// 		FB.AppEvents.logPageView();
	// 	};
	// });

	globalThis.handleGoogleCredentials = async (data) => {
		console.log(data, 'See Token Stuff');
		const decoded = jose.decodeJwt(data.credential);
		console.log(decoded, 'See Decoded');
	};
</script>

<svelte:head>
	<script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<div class="w-full h-full font-normal flex flex-col justify-center items-center">
	<div class="h-full container flex justify-center items-center">
		<div class="p-16 shadow-lg flex flex-col gap-4">
			<div class="text-lg font-bold">Sign-in Options</div>
			<div>
				<div
					id="g_id_onload"
					data-client_id={data.GOOGLE_CLIENT_ID}
					data-context="signin"
					data-ux_mode="popup"
					data-callback="handleGoogleCredentials"
					data-auto_select="true"
					data-itp_support="true"
				/>
				<div
					class="g_id_signin"
					data-type="standard"
					data-shape="rectangular"
					data-theme="outline"
					data-text="signin_with"
					data-size="large"
					data-logo_alignment="left"
				/>
			</div>
		</div>
	</div>
</div>
