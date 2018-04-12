var factory = (function() {
	var privateObject = [];
	// private variable
	
	// returning a public object
	return {
		getProducts: function() {
			return privateObject;
		},
		addProducts: function(item) {
			privateObject.push(item);
			return privateObject;
		},
		deleteProduct: function(itemToDelete) {
			var index = privateObject.indexOf(itemToDelete);
			if (index > 0) {
				privateObject.splice(index, 1);
				return privateObject;
			} else {
				return 'This item does not exist in the list';
			}
		}
	};
	
})();