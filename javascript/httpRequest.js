
console.log("Javascript request");
var url = "https://jsonplaceholder.typicode.com/posts";
getData(url);
sendData(url);

function getData(url) {
	var http = new XMLHttpRequest();
	var method = "GET";

	http.open(method, url);

	http.onreadystatechange = function() { 
		if(http.readyState === XMLHttpRequest.DONE && http.status === 200) {
			alert("Get: sucess!");
			console.log(JSON.parse(http.response)); //json a string that look like a object
		} else if(http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
			alert('Get: bad result!');
		}
	};

	http.send();
}

function sendData() {
	var http = new XMLHttpRequest();
	var method = "POST";
	var db = JSON.stringify(({name: "Sabrina", message: "I dare and I dare again..."})); //convert to string


	http.open(method, url);
	http.setRequestHeader("Content-Type", "application/json");

	http.onreadystatechange = function() {
		if(http.readyState === XMLHttpRequest.DONE && http.status === 201) {
			alert("Post: sucess!");
			console.log(JSON.parse(http.response));
		} else if(http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
			alert('Post: bad result!');
		}
	};

	http.send(db);
}

console.log("Ajax request");
//ajaxSendData('http://whatever.com', {name: 'Sabrina'});
//version 1
function ajaxSendData(url, data) {
	$.ajax({method: 'POST', url:url, data:data});
}

//version 2
/*
function ajaxSendData(url, data) => {
	$.ajax({method: 'POST', url:url, data:data});
}
*/

function ajaxGetData(url) {
	$.get(url, function(data) {
		console.log(data);
	});
}

