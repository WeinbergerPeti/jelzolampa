window.addEventListener("load", init);

function ID(elem)
{
    return document.getElementById(elem);
}

function $(elem)
{
    return document.querySelector(elem);
}

function $All(elem)
{
    return document.querySelectorAll(elem);
}

/* GLOBÁLIS VÁLTOZÓK */
var txt="";

/* - */



function init()
{
    kezdoLampa();

    ID("zold").addEventListener("click", zoldKattint);
    ID("piros").addEventListener("click", kezdoLampa);
    autoKiir("#bal");
    ID("sarga").addEventListener("click", alapSargaSzin);
    ID("sarga").addEventListener("click", szinvaltas);
}

function kezdoLampa()
{
    ID("piros").style.backgroundColor="red";
    ID("piros").style.opacity="100%";
    ID("sarga").style.backgroundColor="yellow";
    ID("sarga").style.opacity="10%";
    ID("zold").style.backgroundColor="green";
    ID("zold").style.opacity="10%";

    $("#bal .auto").style.display="block";
    $("#jobb .auto").style.display="none";
}

function zoldKattint()
{
    ID("piros").style.backgroundColor="red";
    ID("piros").style.opacity="10%";
    ID("sarga").style.backgroundColor="yellow";
    ID("sarga").style.opacity="10%";
    ID("zold").style.backgroundColor="green";
    ID("zold").style.opacity="100%";

    $("#bal .auto").style.display="none";
    autoKiir("#jobb");
    $("#jobb .auto").style.display="block";

}



function autoKiir(oldal)
{   
    $(oldal+" .auto").innerHTML="&#128663";
    $(oldal+" .auto").style.fontSize="100px";
    $(oldal+" .auto").style.textAlign="center";
}

function alapSargaSzin()
{
    ID("piros").style.backgroundColor="red";
    ID("piros").style.opacity="100%";
    ID("sarga").style.backgroundColor="yellow";
    ID("sarga").style.opacity="100%";
    ID("zold").style.backgroundColor="green";
    ID("zold").style.opacity="10%";
}

var tombSzin=["yellow","blue", "red", "green", "purple", "orange"];

var szinSzam=0;
function szinvaltas(event)
{   
    event.target.style.backgroundColor=tombSzin[szinSzam];
    szinSzam++;
     
    console.log(szinSzam);
        
    if (szinSzam==tombSzin.length)
    {
        szinSzam=0;
    }
    
}