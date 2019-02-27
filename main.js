/**
 * Created by ashishtyagi9622 on 27/2/19.
 */
function myFunction() {
    var str=document.getElementById('pass').value;
    console.log(str);
    var pass=str.split(',');
    console.log(pass);
    var message=[];
    for(var i=0;i<pass.length;i++){

        if(pass[i].length<6||pass[i].length>12){
            message.push("Failure Password must be at least 6 characters long.");
            console.log("length");
            continue;
        }
        if(pass[i].search(/[0-9]/)===-1){
            message.push("Failure Password must contain at least one letter from 0-9.");
            continue;
        }
        if(pass[i].search(/[a-z]/)===-1){
            message.push("Failure Password must contain at least one letter from a-z.");
            continue;
        }
        if(pass[i].search(/[A-Z]/)===-1){
            message.push("Failure Password must contain at least one letter from A-Z.");
            continue;
        }
        if(pass[i].search(/[*\$\_\#\=\@]/)===-1){
            message.push("Failure Password must contain at least one letter from *$_#=@.");
            continue;
        }
        if(pass[i].search(/[%\!\)\(]/)!==-1){
            message.push("Failure Password cannot contain %!)(.");
            continue;
        }
        message.push("Success.");
    }
    console.log(message);
    var res="";
    for(var j=0;j<pass.length;j++){
        res=res+pass[j]+" "+message[j]+'<br>';
    }
    document.getElementById('result').innerHTML=res;
    return false;
}