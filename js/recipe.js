// Make rating buttons work

const text = document.querySelector(".rating-text");
const star = document.querySelector(".rating");
const btn = document.querySelector("button");
const post = document.querySelector(".post");
const editBtn = document.querySelector(".edit");

btn.onclick = ()=>{
    text.style.display = "none";
    star.style.display = "none";
    btn.style.display = "none";
    post.style.display = "block";
    return false;
};

editBtn.onclick = ()=>{
    text.style.display = "block"; 
    star.style.display = "flex"; 
    btn.style.display = "block";
    post.style.display = "none"; 
    return false;
};
       