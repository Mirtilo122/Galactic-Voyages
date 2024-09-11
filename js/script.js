console.log("script carregado")

let corpr = localStorage.getItem('corprincipal');
let corse = localStorage.getItem('corsecundaria');
let corte = localStorage.getItem('corterciaria');
let corqu = localStorage.getItem('corquaternaria');
let fntpr = localStorage.getItem('fonteprincipal');
let fntse = localStorage.getItem('fontesecundaria');
document.documentElement.style.setProperty('--cor-principal', corpr);
document.documentElement.style.setProperty('--cor-secundaria', corse);
document.documentElement.style.setProperty('--cor-terciaria', corte);
document.documentElement.style.setProperty('--cor-quaternária', corqu);
document.documentElement.style.setProperty('--fonte-primaria', fntpr);
document.documentElement.style.setProperty('--fonte-secundaria', fntse);

function abrir_sidebar() {
    const element = document.getElementById('sidebar');
    element.classList.toggle('esconder'); 
}



function definir(x){


  switch (x){
    case 0: 
    localStorage.setItem('corprincipal', "#0c1830");
    localStorage.setItem('corsecundaria', "#ff8800");
    localStorage.setItem('corterciaria', "#c0c0c0");
    localStorage.setItem('corquaternaria', "#0099cc");
    break;
    case 1: 
    localStorage.setItem('corprincipal', "#7a2b8f");
    localStorage.setItem('corsecundaria', "#e91e63");
    localStorage.setItem('corterciaria', "#a7a7a7");
    localStorage.setItem('corquaternaria', "#00bcd4");
    break;
    case 2:      
    localStorage.setItem('corprincipal', "#000000");
    localStorage.setItem('corsecundaria', "#c5c5c5");
    localStorage.setItem('corterciaria', "#464646");
    localStorage.setItem('corquaternaria', "#383892");
    break;
    case 3:      
    localStorage.setItem('corprincipal', "#ff5722");
    localStorage.setItem('corsecundaria', "#fbc02d");
    localStorage.setItem('corterciaria', "#9e9e9e");
    localStorage.setItem('corquaternaria', "#1976d2");
    break;
    case 4:
    localStorage.setItem('fonteprincipal', "Orbitron");
    localStorage.setItem('fontesecundaria', "Futura");
    break;
    case 5:
    localStorage.setItem('fonteprincipal', "Andarion");
    localStorage.setItem('fontesecundaria', "Markbats");
    break;
    case 6:
    localStorage.setItem('fonteprincipal', "Standart");
    localStorage.setItem('fontesecundaria', "Glipervelz");
    break;
    case 7:
    localStorage.setItem('fonteprincipal', "Cybertronian");
    localStorage.setItem('fontesecundaria', "Orb");
    break;
  }
  let corpr = localStorage.getItem('corprincipal');
  let corse = localStorage.getItem('corsecundaria');
  let corte = localStorage.getItem('corterciaria');
  let corqu = localStorage.getItem('corquaternaria');
  let fntpr = localStorage.getItem('fonteprincipal');
  let fntse = localStorage.getItem('fontesecundaria');

  document.documentElement.style.setProperty('--cor-principal', corpr);
  document.documentElement.style.setProperty('--cor-secundaria', corse);
  document.documentElement.style.setProperty('--cor-terciaria', corte);
  document.documentElement.style.setProperty('--cor-quaternária', corqu);
  document.documentElement.style.setProperty('--fonte-primaria', fntpr);
  document.documentElement.style.setProperty('--fonte-secundaria', fntse);
}






function abrir_dropdown() {  
  const element1 = document.getElementById('btn_dropdown');
  element1.classList.toggle('all_round');
  element1.classList.toggle('round_top');
  const element2 = document.getElementById('id-dropdown');
  element2.classList.toggle('hide'); 
}

function mostrarloja(y){
  var nomeloja = "1";
  var endereco = "1";
  var codigo = "1";
  var contato = "1";
  switch (y){
    case 1:
    nomeloja = "nome1";
    endereco = "end1";
    codigo = "cod1";
    contato = "cont1";
    break;
    case 2:
      nomeloja = "nome2";
      endereco = "end2";
      codigo = "cod2";
      contato = "cont2";
      break;
    case 3: 
    nomeloja = "nome3";
    endereco = "end3";
    codigo = "cod3";
    contato = "cont3";
    break;
    case 4: 
    nomeloja = "nome4";
    endereco = "end4";
    codigo = "cod4";
    contato = "cont4";
    break;
    case 5:
      nomeloja = "nome5";
      endereco = "end5";
      codigo = "cod5";
      contato = "cont5";
      break;
  }

  document.getElementById("nome-loja").value = nomeloja;
  document.getElementById("endereco-loja").value = endereco;
  document.getElementById("codigo-loja").value = codigo;
  document.getElementById("contato-loja").value = contato;
}