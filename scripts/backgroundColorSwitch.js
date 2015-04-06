var labelClass = $('<label for "desiredClass">Class: </label>'),
	className = $('<input id="desiredClass" type="text"></input>'),
	labelColor = $('<label for "desiredColor">Color: </label>'),
	colorPick = $('<input id="desiredColor" type="text"></input>'),
	button = $('<button type="button" id="paintOnList">Paint</button>'),
	setColorDiv = $('<div>').css('id' ,'setColorDiv'),
	list = $('<div>')
		.html('<ul><li class="bird">Hummingbird</li><li class="bird">Nightingale</li><li>Lizard</li><li class="bird">Eagle</li><li class="bird">Sparrow</li></ul>')
		.addClass('listDiv');

labelClass.appendTo(setColorDiv);
className.appendTo(setColorDiv);
$('<br />').appendTo(setColorDiv);
labelColor.appendTo(setColorDiv);
colorPick.appendTo(setColorDiv);
button.appendTo(setColorDiv);

setColorDiv.appendTo('#Problem2');
list.appendTo('#Problem2');

colorPick.colorPicker();
button.click(function () {
	var nameOfClass = '.' + $('#desiredClass').val(),
		colorCode = $('#desiredColor').val();

	$(nameOfClass).css('background', colorCode);
});