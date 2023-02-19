// Morris Bar Colors
Morris.Bar({
	element: 'barColors',
	data: [
		{x: 'January', Sales: 6},
		{x: 'February', Sales: 1},
		{x: 'March', Sales: 2},
		{x: 'April', Sales: 3},
		{x: 'May', Sales: 2},
		{x: 'June', Sales: 4},
		{x: 'July', Sales: 7},
		{x: 'August', Sales: 2},
		{x: 'September', Sales: 5},
		{x: 'October', Sales: 9},
		{x: 'November', Sales: 3},
		{x: 'December', Sales: 5},
	],
	xkey: 'x',
	ykeys: ['Sales'],
	labels: ['Sales'],
	resize: true,
	gridLineColor: "#e4e6f2",
	hideHover: "auto",
	barColors:['#0066ff', '#e83e8c', '#2b2f82'],
});