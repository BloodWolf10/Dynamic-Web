window.onload= function()
{
 ImageChange();
}



function ImageChange()
{
  
  var docimage = document.getElementById('image');
  docimage.setAttribute('src','images/mountain.jpg')
  docimage.setAttribute('alt',"Picture of Mountain");
  docimage.style.height= "20rem";
  
 
}