var state=false;
function toggle1(){
    if(state){
        document.getElementById("password1").setAttribute("type","password");
        document.getElementById("eye1").style.color='#fff';
        state=false;
    }
    else{
        document.getElementById("password1").setAttribute("type","text");
        document.getElementById("eye1").style.color='#5887ef';
        state=true;

    }
}
function toggle2(){
    if(state){
        document.getElementById("password2").setAttribute("type","password");
        document.getElementById("eye2").style.color='#fff';
        state=false;
    }
    else{
        document.getElementById("password2").setAttribute("type","text");
        document.getElementById("eye2").style.color='#5887ef';
        state=true;

    }
}

