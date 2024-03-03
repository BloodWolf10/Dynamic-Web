function changeStyle(){
    

docBody = document.getElementsByTagName("body")[0];
  //Get all the p elements that are descendants of the body
  myBodyElements = docBody.getElementsByTagName("div");
// get the first p elements
    myp1 = myBodyElements[0];
    myp2 = myBodyElements[1];
    myp3 = myBodyElements[2];
  
  myp1.style.background = "rgb(255,255,0)";
  myp2.style.background = "rgb(255,255,0)";
  myp3.style.background = "rgb(255,255,0)";
}