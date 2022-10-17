const input = document.querySelector(".all-input");
const btn = document.querySelector("button");
const afterSubmit = document.querySelector(".after-submit");

btn.onclick = ()=>{
    input.style.display = "none";
    btn.style.display = "none";
    afterSubmit.style.display = "block";
    return false;
};