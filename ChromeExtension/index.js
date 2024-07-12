let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    console.log("button clicked from listener")
    myLeads.push(val)

    console.log(myLeads)
})

let val = "www.awesomelead.com"
