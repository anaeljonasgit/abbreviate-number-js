function AbbreviateNumber(number) {
	const values = ['', 'k', 'm', 'b', 't'];
	let selected_index = 0;

	while (parseInt(number).toString().length > 3) {
		number = number / 1000;
		number = parseFloat(number.toFixed(1));
		selected_index += 1;
	}

	let string_number = parseInt(number).toString();
	return string_number.length > 1 ? `${string_number}${values[selected_index]}` : `${number.toString()}${values[selected_index]}`;
}