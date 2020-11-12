var state=false;
function toggle(){
    if(state){
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("eye").style.color='#fff';
        state=false;
    }
    else{
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye").style.color='#5887ef';
        state=true;

    }
}
function valid(){
    var user=document.getElementById("username").value;
    var pass=document.getElementById("password").value;

    if(user=="admin"&& pass=="1234"){
        alert("login succesfully");
        document.location.href="contant-topic.html";
        return false;
    }
    else{
        alert("login faild");
        return true;
    }
}