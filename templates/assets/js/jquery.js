//javascript x jQuery
var element = document.querySelector('.element');
element.addEventListener("click", function() {
	console.log('Olá!');
});

$('.element').on("click", function () {
	console.log('Hey!');
});

//mouse events
$('.element').mouseenter(function() {
	console.log('Mouse enter');
});
$('.element').mouseleave(function() {
	console.log('Mouse leave');
});
$('.element').houver(function() {
	console.log('Hover');
});
$('.element').focusin(function() {
	console.log('Focus in');
});
$('.element').focusout(function() {
	console.log('Focus out');
});

//form events
$('.element').submit(function() {
	console.log('Form sended');
});
$('.element').change(function() {
	console.log('Form changed');
});

var checked = $('element').is(':checked');
if(checked) {
	console.log($(this).val() + ' is checked');
} else {
	console.log($(this).val() + ' is not checked');
}

//hide/show elements
$('.element').hide('fast', function() {
	console.log('transition is done');
});
$('.element').show();

$('.element').click(function(event) {
	$(this).toggleClass('hide');
});
