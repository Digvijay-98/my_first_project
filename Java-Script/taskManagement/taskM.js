const tasks = [
    {
        id: 1,
        taskName: "Watch Movie",
        status: 'InComplete'
    },
    {
        id: 2,
        taskName: "Watch Insta",
        status: "Complete"
    }
]

function renderTask(){
    document.getElementById("taskRows").innerHTML =
     tasks.map((elmt, i)=>`
     <tr>
     <td class="col">${i+1}</td>
        <td class="col">${elmt.taskName}</td>
        <td class="col">${elmt.status}</td>
        <td class="col">
            <button>Update Status</button>
        </td>
        </tr>
     `).join('')
}

function addNewTask(){
    newTaskName = document.getElementById("inputTask").value 
    newTaskObj = {
        taskName: newTaskName ,
        status: "incomplete" ,
        id:Date.now()
    }
    console.log(newTaskObj);
    tasks.push(newTaskObj);
    console.log(tasks);
    renderTask();
}

document.getElementById("addTaskBtn").addEventListener('click',addNewTask)
renderTask()