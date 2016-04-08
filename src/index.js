var all = [1, -1]
var ran = require('unique-random-array');

module.exports = {
	all: all,
	random: ran(all),
	
	//show the usage of map 
	absList: function absList(a) {
		return a.map(Math.abs);
	},
	
	//null is the only primitive value
	//that is falsy(aka false-like) but
	//that alson return "object" from
	//the typeof check		 
    isNull: function(a) {
		return (!a && typeof a === "object");
	},
	
	//number of function param
	//[[input]] function
	numOfFunction: function(a) {
		return a.length;
	},
	
	//ES5 Generator(i)//http://www.codewars.com/kata/reviews/53c2e6a08d298d9f00000561/groups/5489a3ee4a943b641100060d
	//[[input]] function
	
	//e.g. 
	//to calculate factorial using next() function
	/*
	function factorialSeq() {
		var pos = 0, count = 1;
		return function() {
			if(pos == 0) { pos++; return count;}
			return count *= pos++;
		}
	}
	*/
	generator: function(a) {
		return {next: a.apply(null, [].slice.call(arguments, 1))};
	}
	
};