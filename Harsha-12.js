let i = document.getElementById("imge");
let l = true;
let da = document.getElementById("dar");

function il() {
    if (l === true) {
        i.src = "https://i.postimg.cc/0ywDMYF3/IMG-20241215-WA0003.jpg";
        l = false;
    } else {
        i.src = "https://i.postimg.cc/jd8qkh43/IMG20240307111853.jpg";
        l = true;
    }
}
let m = true;
let mod = document.getElementById("darkmode");
let n = document.getElementById("na");
let zn = document.getElementById("h111");
let nav = document.getElementById("navItem21");
let nav1 = document.getElementById("navItem11");
let nav2 = document.getElementById("navItem31");
let nav3 = document.getElementById("navItem41");
let nav4 = document.getElementById("navItem51");
let nav5 = document.getElementById("navItem61");
let bo = document.getElementById("brl");
let a = document.getElementById("ar");

function onDark() {
    if (m === true) {
        mod.style.backgroundColor = "black";
        mod.style.color = "white";
        n.style.backgroundColor = "black";
        nav.style.color = "white";
        nav1.style.color = "white";
        nav2.style.color = "#fff";
        nav3.style.color = "#fff";
        nav4.style.color = "#fff";
        nav5.style.color = "#fff";
        bo.style.backgroundColor = "white";
        a.style.color = "white";
        da.src = "https://i.postimg.cc/Pxw2ftMM/IMG-20240321-175207.jpg";
        m = false;
    } else {
        mod.style.backgroundColor = "white";
        mod.style.color = "black";
        n.style.backgroundColor = "white";
        nav.style.color = "black";
        nav1.style.color = "black";
        nav2.style.color = "black";
        nav3.style.color = "black";
        nav4.style.color = "black";
        nav5.style.color = "black";
        bo.style.backgroundColor = "white";
        a.style.color = "black";
        da.src = "https://i.postimg.cc/xdH9QQMv/IMG-20240321-175159.jpg";
        m = true;
    }
}
let s1 = document.getElementById("star1");
let s2 = document.getElementById("star2");
let s3 = document.getElementById("star3");
let s4 = document.getElementById("star4");
let s5 = document.getElementById("star5");
let star = document.getElementById("star-head");
let s = true;
s1.onclick = function() {
    if (s === true) {
        s1.style.color = "orange";
        s2.style.color = "";
        s3.style.color = "";
        s4.style.color = "";
        s5.style.color = "";
        star.textContent = "Rating : Bad";
        s = false;

    } else {
        s1.style.color = "";
        s2.style.color = "";
        s3.style.color = "";
        s4.style.color = "";
        s5.style.color = "";
        star.textContent = "";
        s = true;
    }
};
s2.onclick = function() {
    if (s === true) {
        s1.style.color = "orange";
        s2.style.color = "orange";
        s3.style.color = "";
        s4.style.color = "";
        s5.style.color = "";
        star.textContent = "Rating : Better";
        s = false;

    } else {
        s1.style.color = "";
        s2.style.color = "";
        s3.style.color = "";
        s4.style.color = "";
        s5.style.color = "";
        star.textContent = "";
        s = true;
    }
};
s3.onclick = function() {
    if (s === true) {
        s1.style.color = "orange";
        s2.style.color = "orange";
        s3.style.color = "orange";
        s4.style.color = "";
        s5.style.color = "";
        star.textContent = "Rating : Good";
        s = false;
    } else {
        s1.style.color = "";
        s2.style.color = "";
        s3.style.color = "";
        s4.style.color = "";
        s5.style.color = "";
        star.textContent = "";
        s = true;
    }
};
s4.onclick = function() {
    if (s === true) {
        s1.style.color = "orange";
        s2.style.color = "orange";
        s3.style.color = "orange";
        s4.style.color = "orange";
        s5.style.color = "";
        star.textContent = "Rating : Verygood";
        s = false;

    } else {
        s1.style.color = "";
        s2.style.color = "";
        s3.style.color = "";
        s4.style.color = "";
        s5.style.color = "";
        star.textContent = "";
        s = true;
    }
};
s5.onclick = function() {
    if (s === true) {
        s1.style.color = "orange";
        s2.style.color = "orange";
        s3.style.color = "orange";
        s4.style.color = "orange";
        s5.style.color = "orange";
        star.textContent = "Rating : Excellent";
        s = false;

    } else {
        s1.style.color = "";
        s2.style.color = "";
        s3.style.color = "";
        s4.style.color = "";
        s5.style.color = "";
        star.textContent = "";
        s = true;
    }
};

let u = document.getElementById("review");
let i1 = document.getElementById("input");
let l1 = document.getElementById("label");
let save = document.getElementById("saveButton");
let todosCount = parseInt(0);

function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStorage();
let todosCoun = todoList.length;

save.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
};

function reddy() {
    localStorage.removeItem("todoList");

}

function onAddTodo() {

    let userInputValue = i1.value;

    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }
    todosCount = todosCount + 1;
    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount,
    };

    todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    i1.value = "";
}

l1.onclick = function() {
    onAddTodo();

};

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    u.removeChild(todoElement);
    localStorage.removeItem("todoList");
    alert("We are Removing Your Comment");
}

function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item", "d-flex", "flex-row");

    todoElement.id = todoId;
    u.appendChild(todoElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.id = "deleteContainer";
    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
        reddy();
    };

    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}