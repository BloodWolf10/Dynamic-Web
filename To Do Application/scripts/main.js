
// Fetching


document.addEventListener('DOMContentLoaded',function(){
    const btn = document.getElementById('fetchtodo');
    const Addbtn = document.getElementById('Addtodo');
    const Updatebtn = document.getElementById('Updatetodo');
    const Deletebtn = document.getElementById('Deletetodo');

    btn.addEventListener('click',async function(){
    
 
    
 try{
     
     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20');

     if(!response.ok)
     {
        throw new Error ('No NetWork Response')
     }
 
     const todos = await response.json();
     console.log(todos);


 }catch (error) {
 
     console.error("Error Fetching data");

 }

    }) 



    //Add

 Addbtn.addEventListener('click', async () => {
   
     const title = newTodoInput.value.trim();

     if(title){

         const response = await fetch('https://jsonplaceholder.typicode.com/todos');

     }



 })











// Update












// Delete

   

})



