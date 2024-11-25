const tops=document.querySelectorAll(".top")
const leftIcon=document.querySelector(".left-icon");
const rightIcon=document.querySelector(".right-icon");
let index=0
function display(index){
    tops.forEach((top)=>{
        console.log(top)
        top.style.display="none";
    });
   tops[index].style.display="block"
}

display(index)

function rightBtn(){
index++;
if(index>tops.length-1){
    index=0;
}
display(index);

}
function leftBtn(){
    index--;
    if(index<0){
        index=tops.length-1;
    }
    display(index);
    }

rightIcon.addEventListener("click",rightBtn);
leftIcon.addEventListener("click",leftBtn)