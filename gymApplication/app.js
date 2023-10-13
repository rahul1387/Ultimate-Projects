function getAndUpdate()
{
    console.log("Updating List...");
    nam = document.getElementById('name').value;
    lastName = document.getElementById('last_name').value;
    email = document.getElementById('email').value;

    if (localStorage.getItem('itemsJson') == null)
    {
        itemJsonArray = [];
        itemJsonArray.push([nam,lastName,email]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else
    {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
        itemJsonArray.push([nam,lastName,email]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    update();
}
function update()
{
    if (localStorage.getItem('itemsJson') == null)
    {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else
    {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
    }
    //Populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
            <td><button class="btn btn-sm btn-primary" onclick="Deleted(${index})">Delete</button></td>
        </tr>`
    });
    tableBody.innerHTML = str;
}

add = document.getElementById("add");
add.addEventListener("click",getAndUpdate);
update();

function Deleted(itemIndex)
{
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    update();
}
