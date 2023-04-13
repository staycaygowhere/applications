<script lang="ts">
	import * as jose from 'jose';

	export let google_client_id: string;

	globalThis.handleGoogleCredentials = async (data: { credential: string }) => {
		const decoded = jose.decodeJwt(data.credential);
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
					data-client_id={google_client_id}
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
