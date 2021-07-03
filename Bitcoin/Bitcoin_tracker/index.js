const getData = () => {
	fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
		.then((res) => res.json())
		.then((data) => {
			var date = document.createElement('div');
			date.innerHTML = data.time.updated;
			document.body.appendChild(date);

			var price = document.createElement('span');
			price.innerHTML = data.bpi.EUR.rate_float + ' ';
			document.body.appendChild(price);
			price.style.fontSize = 1.3;
			price.style.fontWeight = 900;

			num2 = data.bpi.EUR.rate_float;
			percent = ((num2 - num1) / num1) * 100;
			percent = parseFloat(percent).toFixed(2);

			var white_thing = document.createElement('span');
			document.body.appendChild(white_thing);
			white_thing.style.color = 'white';
			white_thing.innerHTML = 'eeeeeeeeeeeeeee';

			var percentage = document.createElement('span');
			percentage.innerHTML = ' ' + percent + ' % ';
			document.body.appendChild(percentage);
			percentage.style.fontSize = 1.3;
			percentage.style.fontWeight = 900;

			if (percent > 0) {
				percentage.style.color = 'green';
				percentage.innerHTML = ' + ' + percent + ' %';
			} else {
				percentage.style.color = 'red';
			}
			num1 = data.bpi.EUR.rate_float;
		});
};

async function first() {
	fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
		.then((res) => res.json())
		.then((data) => {
			var date = document.createElement('div');
			date.innerHTML = data.time.updated;
			document.body.appendChild(date);

			var price = document.createElement('span');
			price.innerHTML = data.bpi.EUR.rate_float + ' ';
			document.body.appendChild(price);
			price.style.fontSize = 1.3;
			price.style.fontWeight = 900;
			num1 = data.bpi.EUR.rate_float;
		});
}

first();
setInterval(getData, 600000);
