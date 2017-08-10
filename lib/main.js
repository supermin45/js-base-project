       function main(number) {
        	let result = '';
        	result += complexBottles(number) + SingularBottle(number);
        	return result;
        }  
        function complexBottles(number){
        	let result = '';

        	for (let i = number; i > 1; i--) {
        		let rest = i - 1;
        		let str = i + ' ' +'bottles of beer on the wall,'+' '+i+ ' '+'bottles of beer.\n'+
        		'Take one down and pass it around,'+' '+ rest + ' '+ 'bottles of beer on the wall.\n'; 
        	    result += str;
        	}
        	result = result.replace(/ 1 bottles /g,' 1 bottle ');//使用正则表达式替换字符串
        	return result;
        }
       
        function SingularBottle(number) {

        	return '1 bottle of beer on the wall, 1 bottle of beer.\n'+
        	'Take one down and pass it around, no more bottles of beer on the wall.\n'+
        	'No more bottles of beer on the wall, no more bottles of beer.\n' +
            'Go to the store and buy some more, 99 bottles of beer on the wall.';
        }

module.exports = main;
