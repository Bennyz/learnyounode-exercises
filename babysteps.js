var arguments = process.argv;
var arr = arguments.slice(2, arguments.length);
var numbers = arr.map(function(e) { return Number(e); });
var sum = numbers.reduce(function(i ,c) {
			return i + c;
		}, 0);
console.log(sum);
