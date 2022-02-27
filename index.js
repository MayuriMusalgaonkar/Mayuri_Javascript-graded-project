// First we get the references to all dom elements
let input = document.getElementById("input");
let todolist = document.getElementById("list");

// Then we create a global array to store all ToDo's that are added
let list = [];

function del( i ) {
    list.splice( i, 1 );
    console.log( list );
    loadList();
}

function edit( i ) {
    var txt = prompt("Enter updated ToDo: ");
    list.splice( i, 1, txt );
    console.log(list);
    loadList();
}


/*
    Here, I am not using innerHtml for the entire block because, the first span: desc will contain 
    input from the user. So it is not safe to directly put that into innerHTML. But the buttons do
    not have any such issue, so I am using innerHTML here so that we can easily pass params.
 */
function loadList() {
    todolist.innerHTML="";
    for (var i = 0; i < list.length; i++) {
        let todo = document.createElement('div');
        todo.className = 'todo';

        let desc = document.createElement('span');
        desc.className = 'desc';
        desc.textContent = list[i];

        let editB = document.createElement('span');
        editB.innerHTML = `
            <button class="edit" onclick="edit( ${i} )">Edit</button>
        `;

        let delB = document.createElement('span');
        delB.innerHTML = `
            <button class="del" onclick="del( ${i} )" data-index="0">Delete</button>
        `;

        todo.appendChild(desc);
        todo.appendChild(editB);
        todo.appendChild(delB);

        todolist.appendChild(todo);
    }
}

function add() {
    txt = input.value;
    if (txt !== "") {
        list.push( txt );
        input.value = "";
        loadList();
    }
    else{
        if (txt === '') {
            alert("You must write something!");
          } 
        
    }
}

loadList();