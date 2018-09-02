		<?php include_once 'header.php'; ?>
		<div class="container">
			<section id="form" class="form">
				<h1 class="title">Check your weather</h1>
				<h2 class="subtitle">Enter with your city name and your personal access key.</h2>
				<div class="row">
					<input type="text" name="city" id="city" placeholder="  City*" class="enter enter-user">
					<input type="text" name="key" id="key" placeholder="  Key* (any number)" class="enter enter-user">
				</div>
				<div class="row">
					<input type="radio" id="today" name="days" value="" checked>Today
					<input type="radio" id="5Days" name="days" value="">Next 5 days
				</div>
				<div class="row">
					<button id="submit" class="button">Submit</button>
				</div>
			</section>
			<section id="error" class="error"></section>
			<section id="results" class="results"></section>
		</div>
	    <footer class="footer">
	        <navbar class="navbar">
	        </navbar>
	    </footer>
	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	    <script src="../templates/assets/js/weatherApi.js"></script>
	</body>
</html>

