//#region sidebar
function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
document.getElementById("defaultOpen").click();
//#endregion
//#region contenido
function page(modulo, elment){
  var j, contenido, botones;
  contenido = document.getElementsByClassName("contenido");
  for (j = 0; j < contenido.length; j++){
    contenido[j].style.display = "none";
  }

  botones = document.getElementsByClassName("botones");
  for (j = 0; j < botones.length; j++){
    botones[j].className = botones[j].className.replace("active", "");
  }
  document.getElementById(modulo).style.display = "block";
  elment.currentTarget.className += " active";
}
//#endregion
//#region Vehicles
function page1(vehicle, fleet){
  var b, ctd1, btnfv;
  ctd1 = document.getElementsByClassName("ctd1");
  for (b = 0; b < ctd1.length; b++){
    ctd1[b].style.display = "none";
  }

  btnfv = document.getElementsByClassName("btnfv");
  for (b = 0; b < btnfv.length; b++){
    btnfv[b].className = btnfv[b].className.replace("active", "");    
  }
  document.getElementById(vehicle).style.display = "block";
  fleet.currentTarget.className += "active";
}
//#endregion
//#region Tools
function page2(content, botton){
  var c, ctd2, btnst;
  ctd2 = document.getElementsByClassName("ctd2");
  for (c = 0; c < ctd2.length; c++){
    ctd2[c].style.display = "none";
  }

  btnst = document.getElementsByClassName("btnst");
  for (c = 0; c < btnst.length; c++){
    btnst[c].className = btnst[c].className.replace("active", "");    
  }
  document.getElementById(content).style.display = "block";
  botton.currentTarget.className += "active";
 }
//#endregion
//#region staff
function page3(reg, stff){
  var d, ctd3, btnsf;
  ctd3 = document.getElementsByClassName("ctd3");
  for (d = 0; d < ctd3.length; d++){
    ctd3[d].style.display = "none";
  }

  btnsf = document.getElementsByClassName("btnsf");
  for (d = 0; d < btnsf.length; d++){
    btnsf[d].className = btnsf[d].className.replace("active", "");    
  }
  document.getElementById(reg).style.display = "block";
  stff.currentTarget.className += "active";
 }
//#endregion
//#region suppliers
function page4(txt, supp){
  var e, ctd4, btnsp;
  ctd4 = document.getElementsByClassName("ctd4");
  for (e = 0; e < ctd4.length; e++){
    ctd4[e].style.display = "none";
  }

  btnsp = document.getElementsByClassName("btnsp");
  for (e = 0; e < btnsp.length; e++){
    btnsp[e].className = btnsp[e].className.replace("active", "");    
  }
  document.getElementById(txt).style.display = "block";
  supp.currentTarget.className += "active";
 }
//#endregion
//#region customers
function page5(client, cstm){
  var f, ctd5, btnct;
  ctd5 = document.getElementsByClassName("ctd5");
  for (f = 0; f < ctd5.length; f++){
    ctd5[f].style.display = "none";
  }

  btnct = document.getElementsByClassName("btnct");
  for (f = 0; f < btnct.length; f++){
    btnct[f].className = btnct[f].className.replace("active", "");    
  }
  document.getElementById(client).style.display = "block";
  cstm.currentTarget.className += "active";
 }
//#endregion



//#region mod
function seccion(name, elnt, color){
  var a, ctnido, btn;
  ctnido = document.getElementsByClassName("ctnido");
  for (a = 0; a < ctnido.length; a++){
    ctnido[a].style.display = "none";
  }
  btn = document.getElementsByClassName("btn");
  for (a = 0; a < btn.length; a++){
    btn[a].style.backgroundColor = "";
  }
  document.getElementById(name).style.display = "block";
  elnt.style.backgroundColor = color;
}
document.getElementById("Default").click();
//#endregion
//#region reg
function zona(veh, icle, color){
  var g, regctn, btnreg;
  regctn = document.getElementsByClassName("regctn");
  for (g = 0; g < regctn.length; g++){
    regctn[g].style.display = "none";
  }
  btnreg = document.getElementsByClassName("btnreg");
  for (g = 0; g < btnreg.length; g++){
    btnreg[g].style.backgroundColor = color;
  }
   document.getElementById(veh).style.display = "block";
   icle.style.backgroundColor = color;
}
//#endregion
//#region rgs
function perimetro(sml, tll, color){
  var h, rgctd, btntl;
  rgctd = document.getElementsByClassName("rgctd");
  for (h = 0; h < rgctd.length; h++){
    rgctd[h].style.display = "none";
  }
  btntl = document.getElementsByClassName("btntl");
  for (h = 0; h < btntl.length; h++){
    btntl[h].style.backgroundColor = color;
  }
  document.getElementById(sml).style.display = "block";
  tll.style.backgroundColor = color;
}

//#endregion

