module.exports = function getZerosCount(number, base) {
var firstArr = [], 
	secondArr = [], 
	thirdArr = [];
var count = 0,
	rez = 0;

    for (var i = 2; i <= base; i++){
   		if (base%i === 0) {
    		firstArr.push(i);
    	}
        while (base%i === 0){
            base = base/i;
            count++;
        }
        if (count > 0) {
            secondArr.push(count);
        }
        count = 0;
    }
    var y = 2;
    for (var i = 0; i < firstArr.length; i++){
            var x = firstArr[i];
        while (number/x > 1){
            rez += Math.floor(number/x);
            x = Math.pow(firstArr[i], y);
            y++;
        }
        thirdArr.push(rez);
        rez = 0;
        y = 2;
    }
    for (var i = 0; i < thirdArr.length; i++){
        thirdArr[i] = Math.floor(thirdArr[i]/secondArr[i]);
    }
    thirdArr.sort(function(a, b){return a-b;});
    return thirdArr[0];
}