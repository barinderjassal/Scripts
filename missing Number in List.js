

function findMissingUtil(arr, min, max, diff) {
	debugger;
	if (max <= min)
		return max;
	
	var mid = Math.floor(min + (max - min)/2);
	
	if (arr[mid+1] - arr[mid] != diff)
		return (arr[mid] + diff);
	
	if(mid > 0 && arr[mid]-arr[mid-1] != diff)
		return (arr[mid-1] + diff);
	
	if (arr[mid] == arr[0] + mid*diff)
		return findMissingUtil(arr, mid+1, max, diff);
	
	return findMissingUtil(arr, low, mid-1, diff);
	
}


function findMissing(arr, n) {
	var diff = (arr[n-1] - arr[0])/n;
	return findMissingUtil(arr, 0, n-1, diff);
}


var arr = [2,4,6,10,12,14,16];
findMissing(arr, arr.length);


