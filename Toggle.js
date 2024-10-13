
function toggleTheme(){
    document.addEventListener("DOMContentLoaded",()=>{
        const toggleButton=document.getElementById("theme-toggle");
        const body = document.body;

        toggleButton.addEventListener("click",()=>{
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");

        if(body.classList.contains("dark-theme")){
            localStorage.setItem("theme","light");
        }else{
            localStorage.setItem("theme","dark");
        }
        });

        const savedTheme = localStorage.getItem("theme");
        if(savedTheme){
            body.classList.remove("light-theme","dark-theme");
            body.classList.add(`$(savedTheme)-theme`);
        }
    });
}

export function init(){
    toggleTheme();
}

