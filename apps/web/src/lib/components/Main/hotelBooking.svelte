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

p {
  font-size: 18px;
  color: #666;
}

section {
  margin-bottom: 40px;
}

.hotel-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.hotel-item {
  border: 1px solid #ddd;
  padding: 20px;
  background-color: #fff;
}

.hotel-item img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.hotel-item h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.features-list {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.features-list li {
  flex: 1;
  text-align: center;
  padding: 20px;
  background-color: #fff;
}

.features-list img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.features-list h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.features-list p {
  font-size: 18px;
  color: #666;
}

  </style>
  
  <main>
	<header>
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
		
  </main>
  