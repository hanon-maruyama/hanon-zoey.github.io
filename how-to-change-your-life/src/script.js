function generateQuote(){
  var inputWord = document.getElementById("word").value;
  var quote = " ";
  
  if (inputWord === "love"){
    quote +="Settle! Because, otherwise, you're just gonna get older and harder and more alone. And you're gonna do everything you can to fill that hole- with friends and your career and meaningless sex, but the hole... doesn't get filled. And one day you're going to look around and you're going to realize that everybody loves you... but nobody likes you. And that is the loneliest feeling in the world.- Bojack Horseman";
  }
  
    if (inputWord === "sad"){
    quote +="Just pretend you are happy, and eventually you'll forget you're pretending - Bojack Horseman";
  }
  
    if (inputWord === "tired"){
    quote +="When you get sad, you run straight ahead and you keep running forward, no matter what. - Secretariat";
  }
  
    if (inputWord === "suicidal"){
    quote +="Thrash to break from gravity. What now could slow the drop? All I’d give for toes to touch the safety back at top. But this is it, the deed is done. Silence drowns the sound. Before I leaped I should've seen the view from halfway down. - Secretariat";
  }
  
  document.getElementById("quote").innerHTML = quote
};





