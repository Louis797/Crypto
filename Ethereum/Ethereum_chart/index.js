const xs = [];
const ys = [];

async function chartIt() {
	const ctx = document.getElementById('chart').getContext('2d');
	const myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: xs,
			datasets: [
				{
					lineTension: 0.7,
					label: "Prix de l'Ethereum",
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

async function getDate() {
	fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
		.then((res) => res.json())
		.then((data) => {
			thing = data.time.updated;
			xs.push(thing);
		});
}

async function getPrice() {
	getDate();
	fetch(
		'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR'
	)
		.then((res) => res.json())
		.then((data) => {
			stuff = data.EUR;
			ys.push(stuff);
		});
}

chartIt();
getPrice();

setInterval(getPrice, 60000);
