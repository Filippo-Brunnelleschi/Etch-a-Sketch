const container = document.querySelector(".container");

const rows = document.createElement("div");
rows.classList.add("rowin");
container.appendChild(rows);

function createDivs(r) {

    const c= r;

    for (let j=0; j<r; j++)
    {   
        const row = document.createElement("div");

        for (let i = 0; i < c; i++) {  
            const div = document.createElement("div");
            div.classList.add("cell");
            row.appendChild(div);  
        }
        rows.appendChild(row);
    }
    
}

createDivs(5);