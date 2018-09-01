(function GetLooser() {
	this.init = function () {
		this.addAplicants();
	};

	this.addAplicants = function() {
		function generateList(input) {
			var value = input.value;

			console.log(value);
		}

		var addBtn = document.querySelector("#applicant-add");
		addBtn.addEventListener('click', function() {
			var input = document.querySelector("#applicant_value");
			generateList(input);
		});
	}

	this.init();
}) ();