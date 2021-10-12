let bir=document.getElementById("bir");
let iki=document.getElementById("iki");
let üc=document.getElementById("üc");
let dört=document.getElementById("dört");
let bes=document.getElementById("bes");
let alti=document.getElementById("alti");
let yedi=document.getElementById("yedi");
let sekiz=document.getElementById("sekiz");
let dokuz=document.getElementById("dokuz");
let sıfır=document.getElementById("sıfır");
let geri=document.getElementById("geri");
let ok=document.getElementById("ok");

bir.addEventListener("click",()=>{
    document.getElementById("yaz") .innerHTML +="1";
})
iki.addEventListener("click",()=>{
    document.getElementById("yaz") .innerHTML +="2";
})
üc.addEventListener("click",()=>{
    document.getElementById("yaz") .innerHTML +="3";
})
dört.addEventListener("click",()=>{
    document.getElementById("yaz") .innerHTML +="4";
})
bes.addEventListener("click",()=>{
    document.getElementById("yaz") .innerHTML +="5";
})
alti.addEventListener("click",()=>{
    document.getElementById("yaz") .innerHTML +="6";
})
yedi.addEventListener("click",()=>{
    document.getElementById("yaz") .innerHTML +="7";
})
sekiz.addEventListener("click",()=>{
    document.getElementById("yaz") .innerHTML +="8";
})
dokuz.addEventListener("click",()=>{
    document.getElementById("yaz") .innerHTML +="9";
})
sıfır.addEventListener("click",()=>{
    document.getElementById("yaz") .innerHTML +="0";
})
geri.addEventListener("click",()=>{
    document.getElementById("yaz") .innerHTML ="";
})
sıra1=0;
alınansıralar1=[];
alınansıralar1.push(sıra1);

ok.addEventListener("click",()=>{
    if (document.getElementById("yaz") .innerHTML.length == 10 || document.getElementById("yaz") .innerHTML.length == 11 || document.getElementById("yaz") .innerHTML.length == 16){
       sıra1 +=1;
       if ( sıra1 % 5 !=0){
            document.getElementById("cepno").innerText =sıra1;
            document.getElementById("tcno").innerText =sıra1;
            document.getElementById("kartno").innerText =sıra1;
        }    
        }
    else{
       alert("Eksik veya Hatalı giriş yaptınız! Cep numaranız başında 0 olmadan 10 haneli,tc numaranız 11 haneli veya kart numaranız 16 haneli olmaldır!!") 

    }
}); 
