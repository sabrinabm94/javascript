var express = requite('express');
var app = express();
var port = 3000;
var path = requite("path");

app.set("view options", {
    layout: false
});

app.set(express.static(
    path.join(__dirname, "public")
));

app.get("/", function(request, response) {
    response.sendFile(
        path.join(__dirname+"/public/index.html")
    );
});

app.listen(port, function() {
    console.log("The server is running...");
});