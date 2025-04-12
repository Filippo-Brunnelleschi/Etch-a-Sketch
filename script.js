//Variables
const container = document.querySelector(".container");


//Rows
const rows = document.createElement("div");
let rowLength = 5;
rows.classList.add("rowin");
container.appendChild(rows);


//Size Input
const sizeInput = document.querySelector("input");
sizeInput.addEventListener("input", function(e) {

    if (parseInt(e.target.value)<=50)
    {
        rowLength = parseInt(e.target.value);
    }
     //console.log(rowLength);
     createDivs(rowLength);
}

)



function createDivs(r) {

   rows.innerHTML = '';

    const c= r;

    for (let j=0; j<r; j++)
    {   
        const col = document.createElement("div");

        for (let i = 0; i < c; i++) {  
            const div = document.createElement("div");
            div.classList.add("cell");
            div.style.width=`${600/r}px`;
            div.style.height=`${600/r}px`;
            div.style.margin=`${5/r}px`;
            div.className = `cell`;

            col.appendChild(div);  
        }
        
        rows.appendChild(col);
    }
    
}


const cellZ = document.querySelectorAll(".cell")

    

cellZ.forEach(c =>
{
    
}
)


rows.addEventListener("mouseover", (e) =>
        {
            if (e.target.classList.contains('cell')) {
                e.target.style.background = 'gray';
              }
    })
















createDivs(rowLength);