//javascript x jQuery
var element = document.querySelector('.element');
element.addEventListener('click', function() {
	console.log('Olá!');
});

$('.element').on('click', function () {
	console.log('Hey!');
});

$('.element').on('click mouseenter mouseleave', function () {
	console.log('Much events!');
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

//keyboad events
$('.element').keydown(function(event) {
	var top = 0;
	var down = 40;
	var right = 39;
	var left = 0;

	if(event.which === down) {
		$('.element').css({down: '+=10px'});
	}
	if(event.which === up) {
		$('.element').css({top: '+=10px'});
	}
	if(event.which === right) {
		$('.element').css({right: '+=10px'});
	}
	if(event.which === left) {
		$('.element').css({left: '+=10px'});
	}

	console.log('Key down: ' + event.key);
});

$('.element').keyup(function() {
	console.log('Key up');
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

//attr
console.log('attr');
console.log($('h1').attr('animal'));
$('h1').attr('animal', 'unicorn');
console.log($('h1').attr('animal'));

//prop
$('.radio').prop('checked', 'true');

//sizes
var container = $('.container');
console.log('Container width: ' + container.width() + ' height: ' + container.height());
container.css('width', '+=50px')
console.log('Container width: ' + container.width());
