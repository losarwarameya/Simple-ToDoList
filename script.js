// 1. access all the elements
const form = document.querySelector("#new_item_form");
const list = document.querySelector(".list");
const input = document.querySelector("#input_item");

// 2. add the input item to the list after submit
// form.addEventListener('submit')
form.addEventListener('submit',e=>{
    e.preventDefault();

    //1.create new item
    const item = document.createElement("div");
    item.innerText=input.value;
    item.classList.add("list-item");
    //2.add item to list
    list.appendChild(item);
    //3.clear input
    input.value="";
    //4.onclick delete the list item
    item.addEventListener("click",()=>{
        list.removeChild(item);
    })

})