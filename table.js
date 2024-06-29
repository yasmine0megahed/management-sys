var userName = document.getElementById('username')
var addButton = document.getElementById('button')
var tablebody = document.getElementById('tbody')
var i = 1
//function for add new row
function addRow() {
    var nameValue = userName.value
    var template = `<tr id="row${i}" class="del${i}">
                <td>${i}</td>
                <td ><span class="edit${i}" >${nameValue}</span></td>
                <td><input type="button"  value="delete" id="del${i} " class="del" onclick="remover(this)"></td>
                <td><input type="button"  value="edit" id="edit${i}" class="edit" onclick="edit(this)" ></td>
            </tr>`
    tablebody.innerHTML += template;
    i++
}
// event for add new row
addButton.addEventListener('click', addRow)
//function for remove row
function remover(elementremove) {
    idElememtdel = elementremove.getAttribute('id')            //-----------id
    classElementdel = document.getElementsByClassName(idElememtdel)[0]       //-------<tr></tr>
    classElementdel.remove()
}
//function for edit username
function edit(elementedit) {
    idElementedit = elementedit.getAttribute('id')  //---------id  
    classElemetedit = document.getElementsByClassName(idElementedit)[0]   //---- span
    editvalue = classElemetedit.innerHTML  //----- txt
    userName.value = editvalue
    updatebutton = document.getElementById("update")
    updatebutton.style.display = "inline";
    updatebutton.addEventListener("click", updatefn) //--------event update
    function updatefn() {
        updatebutton.style.display = "none";      //--------- hide update button
        classElemetedit.innerHTML = userName.value
    }
}
