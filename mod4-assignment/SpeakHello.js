(function (window) {
	var helloSpeaker = {};
	var speakWord = "Hello";
	helloSpeaker.speak = function () {
	  return speakWord;
	}
	
	window.helloSpeaker = helloSpeaker;

})(window);
