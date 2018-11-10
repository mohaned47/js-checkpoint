function fct(id){
	if (id=='bold'){
   document.querySelector('p').style.fontWeight=id;}
   else if(id=='italic'){document.querySelector('p').style.fontStyle=id;}
else{document.querySelector('p').style.textDecoration=id;}
}
function fctf(){
	x=document.querySelector('#selection').value;
	document.querySelector('p').style.fontFamily=x;
}
function fcts(){
    y=document.querySelector('#selection2').value;
	document.querySelector('p').style.fontSize=y;
}