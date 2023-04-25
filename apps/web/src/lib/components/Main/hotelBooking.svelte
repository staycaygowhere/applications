
<script>
	let checkInDate = '';
	let checkOutDate = '';
	let destination = '';
	let guests = 1;
	let roomType = '';
	let specialRequests = '';
	let promoCode = '';
	let paymentDetails = '';
	
	function submitForm() {
		// Handle form submission logic here
		// You can access the form data using the above variables
		// and send it to a backend server for further processing
  }
 </script>
 

<style>
@import './form.css';

/* Reset some default styles for consistency */
body, h1, h2, h3, p, ul, li {
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}


  </style>
  

  <main>
	<body>
		<form on:submit|preventDefault={submitForm} class="booking-form">
			<div class="form-header">
				<h1>Make your reservation</h1>
			</div>
			
			<div class="form-group">
				<input class="form-control" type="text" placeholder="Country, ZIP, city..."bind:value={destination} required>
				<span class="form-label">Destination</span>
			</div>

			<div class="form-group">
				<form>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<input  class="form-control" type="date" bind:value={checkInDate} required>
								<span class="form-label" for="checkInDate">Check-in Date</span>	
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<input  class="form-control" type="date" bind:value={checkOutDate} required>
								<span class="form-label" for="checkOutDate">Check-out Date</span>	
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<select class="form-control" required>
									<select bind:value={roomType} required></select>
									<option value="">Select Room Type</option>
									<option value="standard">Standard</option>
									<option value="deluxe">Deluxe</option>
									<option value="suite">Suite</option>
								</select>
								<span class="select-arrow"></span>
								<span class="form-label">Rooms</span>
							</div>
						</div>
					</div>
				</form>
							
			<div class="form-group">
				<input class="form-control" type="text" placeholder="Special Requests"bind:value={specialRequests} >
				<span class="form-label">Destination</span>
			</div>
			
			<button class="submit-btn"type="submit">Book Now</button>
		</div>
	</body>
  </main>
  