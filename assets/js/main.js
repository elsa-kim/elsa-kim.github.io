let themeBtn = document.querySelector(".theme-btn")
let off = themeBtn.children[1];
let on = themeBtn.children[2];

themeBtn.addEventListener("click", ()=>{
  off.style.display=='none'?off.style.display='inline-block':off.style.display='none'
  on.style.display=='none'?on.style.display='inline-block':on.style.display='none'

  if(on.style.display=='inline-block'){
     document.querySelector("aside").style.backgroundColor='#2c59a1cc'
     document.querySelector("aside").style.color='#ccc'
     document.querySelector(".photo").style.border='3px solid #ccc'
     document.querySelector("body").style.backgroundColor='#132646cc'
     document.querySelector("main").style.color='#bbb'
     document.querySelectorAll(".content")[0].style.backgroundColor='rgba(14, 33, 53, 0.548)'
     document.querySelectorAll(".content")[1].style.backgroundColor='rgba(14, 33, 53, 0.548)'
  }else{
    document.querySelector("aside").removeAttribute("style")
    document.querySelector(".photo").removeAttribute("style")
    document.querySelectorAll(".content")[0].removeAttribute("style")
    document.querySelectorAll(".content")[1].removeAttribute("style")
    document.querySelector("body").removeAttribute("style")
    document.querySelector("main").removeAttribute("style")
  }
})
