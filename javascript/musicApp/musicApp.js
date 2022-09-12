(function musicApp() {
  this.init = function () {
    this.search();
  };

  this.search = function () {
    var form = document.querySelector("#form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.querySelector("#input-search-name").value;
      form.reset();
      getData(name.split(" ").join("+")); //find space and change to +
    });
  };

  this.getData = function (artist) {
    var http = new XMLHttpRequest();
    var url =
      "https://itunes.apple.com/search?term=" + artist + "&entity=album";
    var method = "GET";
    var container = document.querySelector(".album-list");
    container.innerHTML = "";

    http.open(method, url);

    http.onreadystatechange = function () {
      if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        console.log("Sucess!");
        showAlbum(JSON.parse(http.response));
      } else if (
        http.readyState === XMLHttpRequest.DONE &&
        http.status !== 200
      ) {
        console.log("Bad result!");
      }
    };

    http.send();
  };

  this.showAlbum = function (data) {
    var container = document.querySelector(".album-list");
    var template = "";
    var resultContainer = document.querySelector(".results-container");
    var noResultContainer = document.querySelector(".no-results-container");
    console.log(data);

    if (data.resultCount > 0) {
      for (var i = 0; i < data.results.length; i++) {
        template += '<li class="album-list-item">';
        template +=
          '<span class="image bg" style="background-image: url(' +
          data.results[i].artworkUrl100 +
          ');"></span>';
        template +=
          '<span class="album">' + data.results[i].collectionName + "</span>";
        template +=
          '<span class="price">Price: USD ' +
          data.results[i].collectionPrice +
          "</span>";
        template +=
          '<a class="buy-link" target="_blank" href="' +
          data.results[i].collectionViewUrl +
          '"><strong>Buy now</strong></a>';
        template += "</li>";
      }

      container.innerHTML = ""; //clear all HTML in the container class
      container.insertAdjacentHTML("afterbegin", template); //append the new template html
      resultContainer.className = "results-container";
      noResultContainer.className += " hide";

    } else {
      resultContainer.className += " hide";
      noResultContainer.className = "no-results-container";
      noResultContainer.innerHTML = "";
      noResultContainer.insertAdjacentHTML(
        "afterbegin",
        '<h2 class="title">No results founded, try again.</h2>'
      );
    }
  };
  this.init();
})();
