
var line1 = "It was 94 fahrenheit outside,";
var line2= " so Willy the Goblin went for a walk.";
var line3= "\n When they got to the soup kitchen, ";
 var line4= "they stared in horror for a few moments, "
 var line5= " \n then turned into a slug and crawled away.";
var line6 = "Bob saw the whole thing, but was not surprised  - Willy the Goblin weighs 300 pounds, and it was a hot day."

const para = document.getElementById('para');
para.append(`${line1} \n ${line2} \n ${line3} ${line4} ${line5} ${line6}`);
