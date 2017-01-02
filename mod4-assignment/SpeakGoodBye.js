(function (window) {
	var byeSpeaker = {};
	var speakWord = "Good bye";
	byeSpeaker.speak = function () {
	  return speakWord;
	}

	window.byeSpeaker = byeSpeaker;

})(window);
