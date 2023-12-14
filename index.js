function loadItem() { 
	accordionTitles.map((e, i) => { 
		createItem(e, accordionDesc[i]); 
	}); 
} 
loadItem(); 
function addItem() { 
	const title = document.getElementById("title").value; 
	const des = 
		document.getElementById("description").value; 
	if (!title || !des) { 
		window.alert("Incomplete input"); 
	} else { 
		createItem(title, des); 
	} 
} 
function createItem(title, desc) { 

	const head = document.createElement("div"); 
	head.classList.add("accordion-header"); 
	head.innerText = title; 

	const des = document.createElement("div"); 
	des.classList.add("accordion-content"); 

	const p = document.createElement("p"); 
	p.innerText = desc; 
	des.appendChild(p); 

	const item = document.createElement("div"); 
	head.classList.add("accordion-item"); 

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

	head.addEventListener("click", () => { 
		des.classList.toggle("active"); 
		if (des.style.display === "block") { 
			des.style.display = "none"; 
		} else { 
			des.style.display = "block"; 
		} 
	}); 

    
            

    

	item.appendChild(head); 
	item.appendChild(des); 
	document.getElementById("menu").appendChild(item); 
}