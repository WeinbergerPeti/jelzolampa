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



function init()
{
    kezdoLampa();

    ID("zold").addEventListener("click", zoldKattint);
    ID("piros").addEventListener("click", kezdoLampa);
    autoKiir("#bal");
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

var txt=""

function autoKiir(oldal)
{   
    $(oldal+" .auto").innerHTML="&#128663";
    $(oldal+" .auto").style.fontSize="100px";
    $(oldal+" .auto").style.textAlign="center";
}