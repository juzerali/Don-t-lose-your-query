function prepareQueryArray(){
	var that = this;
	function sortNumber(a,b)
		{
			return b - a;
		}

	var sortedArray=[];
	for(var i=0; i<localStorage.length ; i++){
		sortedArray.push(localStorage.key(i));
	}
	sortedArray.sort(sortNumber);

	var sortedMap={};

	$.each(sortedArray, function(index,value){
		sortedMap[value] = localStorage[value];
	});
	return sortedMap;
	
}

var array = prepareQueryArray();
var otherDay = new Date();
otherDay.setDate(yesterday.getDate()-10);
otherDay = otherDay.getTime();

$.each(array, function(key,val){
	try{
		if (key<otherDay)
		{
			localStorage.removeItem(key);
		}
	}catch(e){}
});