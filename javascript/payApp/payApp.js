(function GetLooser() {
  this.applicants = [];

  this.init = function () {
    this.addAplicants();
    this.getRandomUser();
    this.runAgain();
    this.startOver();
  };

  this.showList = function showList() {
    var parent = document.querySelector(".applicant-list");
    var template = "";

    for (var i = 0; i < applicants.length; i++) {
      template +=
        "<li class='applicant-list-item' data-id='" +
        i +
        "'>" +
        applicants[i] +
        "</li>";
    }

    parent.innerHTML = "";
    parent.insertAdjacentHTML("afterbegin", template);
    deleteOne();
  };

  this.addAplicants = function () {
    var $this = this;

    function generateList(input) {
      var value = input.value;

      if ($this.checkValid(value.toLowerCase())) {
        $this.applicants.push(value.toLowerCase());
        input.value = "";
        showList();
      } else {
        alert("Something is wrong");
      }
      showList();
    }

    var addBtn = document.querySelector("#applicant-add");
    addBtn.addEventListener("click", function () {
      var input = document.querySelector("#applicant_value");
      generateList(input);
    });
  };

  this.checkValid = function (value) {
    if (applicants.indexOf(value) < 0 && value != "") {
      return true;
    }
    return false;
  };

  this.deleteOne = function () {
    var item = document.querySelectorAll(".applicant-list-item");

    function removeIt(element) {
      var attr = parseInt(element.getAttribute("data-id"));

      applicants.splice(attr, 1);

      showList();
    }

    for (var i = 0; i < item.length; i++) {
      item[i].addEventListener("click", function (e) {
        removeIt(this);
      });
    }
  };

  this.getRandomUser = function () {
    var resultsButton = document.querySelector(".get-looser");
    resultsButton.addEventListener("click", function (e) {
      if (applicants.length > 1) {
        showLooser();
      }
    });

    function showLooser() {
      var resultsContainer = document.querySelector(".results-container");
      var applicantContainer = document.querySelector(".applicant-container");

      applicantContainer.className += " hide";
      resultsContainer.className = "results-container";

      showRandomUser();
    }
  };

  this.showRandomUser = function () {
    var resultContainer = document.querySelector(".result");
    var randomName = applicants[Math.floor(Math.random() * applicants.length)];

    resultContainer.innerHTML = "";
    resultContainer.insertAdjacentHTML(
      "afterbegin",
      "<h3 class='title'>" + randomName + "</h3>"
    );
  };

  this.runAgain = function () {
    var runAgainButton = document.querySelector(".run");

    runAgainButton.addEventListener("click", function (e) {
      showRandomUser();
    });
  };

  this.startOver = function () {
    var startAgainButton = document.querySelector(".start");

    startAgainButton.addEventListener("click", function () {
	const hideClass = "hide";
      applicants = [];

      var resultsContainer = document.querySelector(".results-container");
      var applicantContainer = document.querySelector(".applicant-container");
      var applicantWrapper = document.querySelector(".applicant-list");
	  var resultTitle = document.querySelector(".results-container .result .title");

      applicantContainer.className = "applicant-container";

	  if(resultsContainer.classList.contains(hideClass) === false) {
		resultsContainer.classList.add(hideClass);
	  }
      applicantWrapper.innerHTML = "";
	  resultTitle.innerHTML = "";
    });
  };

  this.init();
})();
