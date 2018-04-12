
// to resolve/reject a promise
function executePromise(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(()=> {
			resolve(ms);
		}, ms);
	}).catch((error) => {
		console.log(error);
	});
}

// this is a promise array and for each promise, a function executePromise() is called which returns a resolve/rejected promise
var promiseArray = [executePromise(1000), executePromise(2000), executePromise(3000), executePromise(4000)];

// getData() behaves as a Promise.all() function
var finalPromises = getData(promiseArray).then(function(records) {
						console.log(records)
					})
					.catch(function(error) {
						console.log(error);
					});

function getData(promises) {
	var results = [];
	var counter = 0;
	return new Promise(function(resolve, reject) {
		promises.forEach(function(promise, index) {
			promise.then(function(value) {
				results[index] = value;
				counter++;
				if (counter === promises.length) {
					resolve(results);
				}
			}).catch(function(error) {
				reject('error reason::' + error);
			});
		});
	});
}