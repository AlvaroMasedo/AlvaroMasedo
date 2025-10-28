const blade = document.querySelector(".lightsaber .blade");

document.querySelector(".switchbutton").addEventListener("click", function(){
    blade.classList.toggle("blade-height");
});