function getUniqueKey() {
	let rdm = Math.random();
	rdm = (rdm * 1000) - ((rdm * 1000) % 1) + (new Date().getTime() * 1000);
	return rdm;
}

export default getUniqueKey;
