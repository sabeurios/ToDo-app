document.getElementsByClassName("btn-add")[0].addEventListener("click",addFunction);
let items=document.getElementById("inputItem")


function addFunction(){
    if(items.value!==""){

        let btncomplete=document.createElement("button")
        btncomplete.setAttribute("class","btncomplete")
        btncomplete.setAttribute("style", "padding:8px;margin-left:111px;width:8%;border-radius: 3px;background-color: white;font-size: 13px;font-family: sans-serif;color: grey;")
        btncomplete.innerHTML="Complete"
        document.body.appendChild(btncomplete)

        let btndelete=document.createElement("button")
        btndelete.setAttribute("class","btndelete")
        btndelete.setAttribute("style", "padding:8px;margin:3px;width:8%;border-radius: 3px;background-color: white;font-size: 13px;font-family: sans-serif;color: grey;")
        btndelete.innerHTML="Delete"
        document.body.appendChild(btndelete)

        let label=document.createElement("label")
        label.setAttribute("class","label")
        label.setAttribute("style", "color:grey;font-weight:bold;margin-left:60px;font-size:40px")
        label.innerHTML=items.value
        document.body.appendChild(label)

        inputItem.value="";

        let breakline=document.createElement("br")
        breakline.setAttribute("id","breakline")
        document.body.appendChild(breakline)

        btndelete.addEventListener("click",function(){
            btncomplete.parentNode.removeChild(btncomplete)
            btndelete.parentNode.removeChild(btndelete)
            label.parentNode.removeChild(label)
            breakline.parentNode.removeChild(breakline)
        })
        btncomplete.addEventListener("click",function(){
            if(btncomplete.innerHTML==="Complete")
            {
                btncomplete.innerHTML="Undo"
                label.setAttribute("style","text-decoration:line-through;color:grey;font-weight:bold;margin-left:60px;font-size:40px")
                
            }
            else
            {
                btncomplete.innerHTML="Complete"
                label.setAttribute("style","text-decoration:none;color:grey;font-weight:bold;margin-left:60px;font-size:40px") 
            }
        })
    }
    else {
            alert("No item written");
         }
}
