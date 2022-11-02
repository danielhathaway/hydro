function getDateString() {
	let date = new Date();
	let d = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return d[date.getDay()] + ' ' + m[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}

export default getDateString;
