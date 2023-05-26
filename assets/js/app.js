let cl = console.log;

const mytabHeading = [...document.querySelectorAll(".mytabHeading li")]

const tabContent = [...document.querySelectorAll(".tabContent")]



const onSubmitHandler = (eve) => {
    let getId = eve.target.getAttribute("data-id");
    cl(getId);

    tabContent.forEach(p =>{
        p.classList.remove("active")
    })  // remove non selected paragraph

    document.getElementById(getId).classList.add("active"); //


    mytabHeading.forEach(li =>{
        li.classList.remove("active")
    }) //remove ALL ACTIVE 
    
    eve.target.classList.add("active")  //SINGLE ACTIVE
   
}


mytabHeading.forEach(li => {
    li.addEventListener("click", onSubmitHandler)
})