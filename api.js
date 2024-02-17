function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var tableHtml =  "<table class='table'><thead><tr><th>Task</th></tr></thead><tbody>";
            
            response.forEach(function(task){
                tableHtml +="<tr><td>" + task.title + "</td></tr>"
            });

            tableHtml +="</tbody></table>";
            document.getElementById("demo").innerHTML=tableHtml;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos");
    xhttp.send();

}

//

function fetchAndDisplayTodoList() {
   
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        const todoTableBody = document.getElementById('todoTableBody');
        let completedTasks = 0; 

        
        data.forEach(task => {
            
            const row = document.createElement('tr');

          
            const taskCell = document.createElement('td');
            taskCell.textContent = task.title;
            row.appendChild(taskCell);

           
            const statusCell = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed; 
            statusCell.appendChild(checkbox);
            row.appendChild(statusCell);

          
            todoTableBody.appendChild(row);

            
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    completedTasks++;
                } else {
                    completedTasks--;
                }

               
                if (completedTasks === 5) {
                  
                    alert('Congrats! You have successfully completed 5 tasks.');
                }
            });
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}


document.addEventListener('DOMContentLoaded', fetchAndDisplayTodoList);




   
