let str="";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
   button.addEventListener('click', (now)=>{

    if(now.target.innerHTML== '='){
        str = eval(str);
        document.querySelector('input').value=str;
    }

    else if (now.target.innerHTML=='C'){
        str="";
        document.querySelector('input').value = str;
    }

    else{
    console.log(now.target)
    str += now.target.innerHTML;
    document.querySelector('input').value=str;
}
}) 
})