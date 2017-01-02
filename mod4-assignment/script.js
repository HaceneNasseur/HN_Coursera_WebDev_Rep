(function (window) {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    for (i = 0; i < names.length; i++) {
      var firstLetter = "j";
      if (names[i].charAt(0).toLowerCase() == firstLetter) {
        console.log(byeSpeaker.speak() + " " + names[i]);
    } else {
      console.log(helloSpeaker.speak() + " " + names[i]);
    }
  }
})(window);
