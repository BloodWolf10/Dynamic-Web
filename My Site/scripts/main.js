
        
       // selecting modify button and click event 
        
        document.getElementById('modify-button').addEventListener('click', function()  {
            // select and modify heading

            const mainHeading = document.getElementById('main-heading');
            mainHeading.innerText= 'Site Under Development';
            mainHeading.style.fontFamily= 'georgia';
            mainHeading.style.color='seagreen';

            

            // select and modify paragraph
            const contentParagraph = document.getElementsByClassName('content-paragraph');

            for (let i=0;i<contentParagraph;i++)
            {
                contentParagraph[i].style.fontWeight = 'bold';
            }

            // select and modify list items

            const listItems = document.querySelectorAll('ul li');
             for(let i=0; i<listItems.length; i++)
            {
                listItems[i].style.listStyleType = 'Square';
            }


        } )

       

   
   