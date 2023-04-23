<script lang="ts">
	import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
	// import type { PageData } from './$types';

	// export let data: PageData;
</script>


<link src="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
        
<header>
	<div class="w-full flex flex-row justify-between p-5">
		<ul>
			<sl-icon class="text-9xl select-none" library="custom" name="logo" />

		</ul>
		
		<ul ><a href="/">Home</a></ul> 
		<ul><a href="/accomodations">Accomodations</a></ul>
		<ul><a href="/auth/login">Login</a></ul>
		<ul><a href="/auth/login">Booking Now</a></ul>
		<ul><button class="primary-btn">BOOK NOW</button></ul>


		<ul>
			<sl-avatar label="User avatar" />
		</ul>

	</div>
</header>
<style>

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Poppins', sans-serif;
}

h1, h2 {
	font-family: sans-serif;
	font-weight: 400;
}

a {
	text-decoration: none;
}

li {
	list-style:  none;
}

.flex {
	display: flex;
}

.flex_space{
	display: flex;
	justify-content: space-between;
}

button {
	border: none;
	background: none;
	outline: none;
	transition: 0.5s;
	cursor: pointer;
}

.primary-btn {
	padding: 15px 40px;
	background: #7fc142;
	font-weight: bold;
	color: white;
}

header {
	width: 100%;
	height: 10vh;
	line-height: 6vh;
	padding: 0 20px;;
}


ul {
	display: inline-block;
}

ul li{
	display: inline-block;
	text-transform: uppercase;
}


</style>