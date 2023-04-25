<script lang="ts">
  import { signIn } from "@auth/sveltekit/client"
  import { invalidateAll } from '$app/navigation';
  const handleSubmit = async (event: any) => {
    const data = new FormData(event.target);
    try {
      await signIn('credentials', {
        email: data.get('email'),
        password: data.get('password')
      });
    } catch (error) {
      await invalidateAll();
    }
  }
  
</script>
<header>

</header>

<main>

	<div>
		
		<form name="login" method="POST" on:submit|preventDefault={handleSubmit}>
			<h1>Login</h1>
			<input name="email" type="email" placeholder="Email Address" />
			<input name="password" placeholder="Password" type="password" />
			<button>Sign In</button>
		</form>
	</div>
</main>

<style>


body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

/* Style form button on hover */
button {
  background-color: rgb(29, 182, 136);
  color: #grey
}

button:hover {
background-color: rgb(29, 145, 110);
  color: #ffff;
}


form {
  display: grid;
  grid-template-columns: 200px 1fr;
  position: relative;
  max-width: 500px;
  width: 50%;
  margin: auto;
  padding: 40px;
  overflow: hidden;

  background-size: cover;
  border-radius: 5px;
  z-index: 20;
}

form::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(24, 83, 49, 0.6);
  z-index: -1;
}

form h1 {
	grid-column: 1/3;
	font-weight: 300;
  	text-transform: capitalize;
  	font-size: 42px;
  	margin: 0px;
  	color: #fff;
}
form {
  box-sizing: border-box;
  padding: 2rem;
  border-radius: 1rem;
  background-color: hsl(0, 0%, 100%);
  border: 4px solid hsl(0, 0%, 90%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

button {
	grid-column: 1/3;
	width: 100%;
}

input {
	grid-column: 1/3;
	margin: 0px;
}
</style>
