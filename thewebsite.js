let toastBox=document.getElementById('toastBox');
let successMsg= '<i class="fa-solid fa-circle-check"></i>Successfully submitted';
let errorMsg='<i class="fa-solid fa-xmark"></i>Please fix the error';
let invalidMsg='<i class="fa-solid fa-exclamation"></i>Invalid input,checkagain';
function showToast(Msg){
let toast =document.createElement('div');
toast.classList.add('toast');//This a the create the  a new a the  class 
toast.innerHTML=Msg;
toastBox.appendChild(toast);
if(Msg.includes('success')){
    toast.classList.add('success');
}
if(Msg.includes('error')){
    toast.classList.add('error');
}
if(Msg.includes('Invalid')){
    toast.classList.add('Invalid');
}
setTimeout(()=>
{
    toast.remove();
},6000);
}

