function parseValue(choices, value) {
	if (value === undefined || value === null || value === false) {
		return 'none';
	}
	if (choices === undefined) {
		return undefined;
	}
	return choices.map((e, n) => {
		if (e.key === value) return e.text;
	});
}

export default parseValue;
