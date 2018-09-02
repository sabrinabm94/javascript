(function GetLooser() {
	this.applicants = [];
	
	this.init = function () {
		this.addAplicants();
	};

	this.addAplicants = function() {
		function generateList(input) {
			var value = input.value;

			if(this.checkValid(value)) {
				applicants.push(value);
				input.value = '';
			} else {
				console.log("Something is wrong");
			}

			console.log(applicants);
		}

		var addBtn = document.querySelector("#applicant-add");
		addBtn.addEventListener('click', function() {
			var input = document.querySelector("#applicant_value");
			generateList(input);
		});
	}

	this.checkValid = function(value) {
		if(applicants.indexOf(value) < 0 && value != '') {
			return true;
		}
		return false;
	};

	this.init();
}) ();