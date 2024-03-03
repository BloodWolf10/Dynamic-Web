const textareas = document.querySelectorAll("textarea")
    const paragraph = document.querySelectorAll("p");
    
   const button1 = document.getElementById('button1');

 button1.addEventListener('click', function(){
  for(var i=0; i<2;i++){  
  textareas[i].classList.toggle('highlight');
  paragraph[i].classList.toggle('highlight');
  }
    
 });