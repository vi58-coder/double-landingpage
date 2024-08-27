const containerEl = document.querySelector(".container");

const leftEl = document.querySelector(".left"); // or #left if it's an ID
const rightEl = document.querySelector(".right"); // or #right if it's an ID

leftEl.addEventListener("mouseenter", ()=>{
    containerEl.classList.add("active-left")
});

leftEl.addEventListener("mouseleave", ()=>{
    containerEl.classList.remove("active-left")
});

// Add event listeners for rightEl if necessary
rightEl.addEventListener("mouseenter", ()=>{
    containerEl.classList.add("active-right") // or a different class if needed
});

rightEl.addEventListener("mouseleave", ()=>{
    containerEl.classList.remove("active-right") // or a different class if needed
});