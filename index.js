console.log("Script running");
document.querySelector('.cross').style.display='none';
document.querySelector('.menu').addEventListener('click',()=>{
    if(document.querySelector('.sidebar').classList.toggle('sidebarGo')){
        document.querySelector('.open').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.open').style.display='none'
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline';
        },200);
    }

})