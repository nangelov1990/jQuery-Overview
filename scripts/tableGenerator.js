var data = [{"manufacturer":"BMW","model":"E92 320i","year":2011,"price":50000,"class":"Family","name":"Pepi"},
{"manufacturer":"Porsche","model":"Panamera","year":2012,"price":100000,"class":"Sport"},
{"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family"}];

function getTableHeader (obj) {
	var header = [];

	obj.forEach(function (curObj) {
		for (var key in curObj) {
			if (header.indexOf(key) === -1) {
				header.push(key);
			}
		}
	})

	return header;
}

function constructTableByJsonObject (obj) {
	var header = getTableHeader(obj),
		table = $('<table>'),
		curLine = $('<tr>'),
		curCell;

	header.forEach(function (curHeader) {
		curHeader = curHeader.charAt(0).toUpperCase() + curHeader.slice(1)
		curCell = $('<th>').text(curHeader);
		curLine.append(curCell);
	})
	curLine.appendTo(table);

	obj.forEach(function (curObj) {
		curLine = $('<tr>');
		header.forEach(function (curHeader) {
			curCell = $('<td>');
			for (var key in curObj) {
				if (key == curHeader) {
					curCell.text(curObj[key]).appendTo(curLine);

					break;
				}
			}

			if (curCell.text() == '') {
				curCell.text('-').addClass('emptyCell').appendTo(curLine);
			}
		})
		curLine.appendTo(table);
	})

	return table;
}

//for testing
console.log(getTableHeader(data));
constructTableByJsonObject(data).appendTo('#Problem3');