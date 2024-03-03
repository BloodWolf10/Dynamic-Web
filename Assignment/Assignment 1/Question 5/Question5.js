const target = document.getElementById('targetparagraph').onclick = function()
{
    colouring();
};

function colouring()
{
 document.getElementById('targetparagraph').style.color = "white";
 document.getElementById('targetparagraph').style.backgroundColor= "black";
 
}