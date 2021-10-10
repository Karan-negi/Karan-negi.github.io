function func1()
{   
    document.getElementById("Education").style.display = "none";
    document.getElementById("About").style.display = "none";
    document.getElementById("Contact").style.display = "none";
    document.getElementById("home").style.display = "block";
}

function func2()
{   
    document.getElementById("home").style.display = "none";
    document.getElementById("Education").style.display = "none";
    document.getElementById("Contact").style.display = "none";
    document.getElementById("About").style.display = "block";
}

function func3()
{   
    document.getElementById("home").style.display = "none";
    document.getElementById("About").style.display = "none";
    document.getElementById("Contact").style.display = "none";
    document.getElementById("Education").style.display ="block";
}

function func4()
{   
    document.getElementById("home").style.display = "none";
    document.getElementById("Education").style.display = "none";
    document.getElementById("About").style.display = "none";
    document.getElementById("Contact").style.display = "block";
}


function display(){
    let date=new Date().toString().split(" ");
    let res="";
    for(let i=0;i<date.length;i++)
    {
        if(i==5){
            break;
        }
        res+=date[i]+" ";
    }
        
    document.getElementById("time").innerHTML=res;
    var t=setTimeout(display,950);
 }
