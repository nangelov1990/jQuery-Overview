$('<div>')
	.addClass('elemInsertion')
	.text('I was created first.')
	.appendTo($('#Problem1'));

$('<div>')
	.addClass('elemInsertion')
	.text('I was created second but am prepanded to the parent.')
	.prependTo($('#Problem1'))
	.hide()
	.fadeIn(3000);

$('<div>')
	.addClass('elemInsertion')
	.text('I was created last and am apanded to the parent.')
	.appendTo($('#Problem1'))
	.hide()
	.fadeIn(6000);