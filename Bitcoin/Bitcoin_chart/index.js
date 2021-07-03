const xs = [];
const ys = [];

function chartIt() {
	const ctx = document.getElementById('chart').getContext('2d');
	const myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: xs,
			datasets: [
				{
					lineTension: 0.7,
					label: 'Prix du Bitcoin',
					data: ys,
					backgroundColor: 'rgba(200, 130, 120, 0.4)',
					fill: true,
					borderColor: 'rgba(200, 130, 120, 1)',
					borderWidth: 1,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: false,
				},
			},
		},
	});
}

async function getData() {
	const response = await fetch(
		'https://api.coindesk.com/v1/bpi/currentprice.json'
	);
	const data = await response.json();
	const date = data.time.updated;
	const price = data.bpi.EUR.rate_float;
	ys.push(price);
	xs.push(date);
}

chartIt();
getData();

setInterval(getData, 60000);
