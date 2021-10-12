let cep = document.getElementById("cep");
let tc = document.getElementById("tc");
let kart = document.getElementById("kart");
let müsteridegil = document.getElementById("müsteridegil");
let bir=document.getElementById("bir");
let sırasayısı=0;
var alınansıralar = [];
alınansıralar.push(sırasayısı);
cep.addEventListener("click",()=>{
    window.location.href="cepsıra.html";

});
tc.addEventListener("click",()=>{
    window.location.href="tcsıra.html";

});
kart.addEventListener("click",()=>{
    window.location.href="kartnosıra.html";

});
müsteridegil.addEventListener("click",()=>{
    for (let i=0; i<alınansıralar.length; i++){
        if(i != alınansıralar[i]){
            continue
        }
        else{
            sırasayısı = sırasayısı+5;
            alınansıralar.push(sırasayısı);
            document.getElementById("müsdegilno").innerText =sırasayısı;
        
            console.log(alınansıralar);
        }
    }
});
// bir.addEventListener("click",()=>{
//     window.location.href="index.html";

//     //document.getElementById("ekran").innerHTML="1";
// })