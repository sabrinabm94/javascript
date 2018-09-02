(function GetLooser() {
	this.applicants = [];
	
	this.init = function () {
		this.addAplicants();
	};

	this.showList = function showList() {
		var parent = document.querySelector('.applicant-list');
		var template = '';

		for(var i = 0; i < applicants.length; i++) {
			template += "<li class='applicant-list-item' data-id='"+ i +"'>" + applicants[i] + "</li>";
		}

		parent.innerHTML = '';
		parent.insertAdjacentHTML('afterbegin', template);
		deleteOne();
	}

	this.addAplicants = function() {
		function generateList(input) {
			var value = input.value;

			if(this.checkValid(value.toLowerCase())) {
				applicants.push(value.toLowerCase());
				input.value = '';
				showList();
			} else {
				console.log("Something is wrong");
			}

			showList();
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

	this.deleteOne = function() {
		var item = document.querySelectorAll('.applicant-list-item');

		function removeIt(element) {
			var attr = parseInt(element.getAttribute('data-id'));

			applicants.splice(attr, 1);

			showList();
		}

		for(var i = 0; i < item.length; i++) {
			item[i].addEventListener('click', function(e) {
				removeIt(this)
			});
		}
	};

	this.init();
}) ();