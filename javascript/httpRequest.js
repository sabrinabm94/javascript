
getData();
sendData();
//ajaxSendData('http://whatever.com', {name: 'Sabrina'});

function getData() {
	var http = new XMLHttpRequest();
	var url = "https://jsonplaceholder.typicode.com/posts";
	var method = "GET";

	http.open(method, url);

	http.onreadystatechange = function() {
		if(http.readyState === XMLHttpRequest.DONE && http.status === 200) {
			alert("Get: sucess!");
			console.log(JSON.parse(http.response));
		} else if(http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
			alert('Get: bad result!');
		}
	};

	http.send();
}

function sendData() {
	var http = new XMLHttpRequest();
	var url = "https://jsonplaceholder.typicode.com/posts";
	var method = "POST";
	var db = JSON.stringify(({name: "Sabrina", message: "I dare and I dare again..."})); //convert to string


	http.open(method, url);
	http.setRequestHeader("Content-Type", "application/json");

	http.onreadystatechange = function() {
		if(http.readyState === XMLHttpRequest.DONE && http.status === 201) {
			alert("Get: sucess!");
			console.log(JSON.parse(http.response));
		} else if(http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
			alert('Get: bad result!');
		}
	};

	http.send(db);
}

/* version 1
function ajaxSendData(url, data) {
	$.ajax({method: 'POST', url: url, data: data});
}

/* version 2
function ajaxSendData(url, data) => {
	$.ajax({method: 'POST', url:url, data:data});
}
*/
