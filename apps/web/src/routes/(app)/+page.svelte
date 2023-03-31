<script lang="ts">
	import { signOut as authSignOut } from 'sk-auth/client';

	// getting the user from the session store
	// $: user = $session.user;

	// function signIn() {
	// 	location.assign('/api/auth/signin/cognito?redirect=/');
	// }

	// function signOut() {
	// 	authSignOut().then(session.set);
	// }
</script>

<div class="font-semibold text-9xl -rotate-12">Staycay Go Where?</div>
<div class="font-semibold text-5xl rotate-12">Staycay Go Where?</div>
<div class="font-semibold text-2xl -rotate-45">Staycay Go Where?</div>

<!-- {#if !user}
	<button on:click={signIn}>Log In with Cognito</button>
{:else}
	<h2>Welcome {user.email}!</h2>
	<p>Your username is {user.username} and your email has been verified: {user.email_verified}</p>
	<button on:click={signOut}>Log Out</button>
{/if} -->
