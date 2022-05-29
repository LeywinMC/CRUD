const boton= document.getElementsByClassName('div');
console.log(boton);
console.log(boton.length);

const boton1= () => {
boton[0].style.background= 'red'
 }
  const boton2= () => {
    boton[1].style.width= 'fit-content';
    boton[1].style.height= '150px';
     //width: 200px;
    //height: 200px;
    //mycube[2].style.width= 'fit-content'
  }
 
  const boton3= () => {
      //alert('no se we')
    boton[2].style.border= 'dotted';
    boton[2].style.borderWidth= '5px';
    boton[2].style.borderColor= 'black';
    alert('Lo logro señor')
    //boton[2].style.border-width = '10px';
    //  border-style: dotted;
    //  border-width: 10px;
    //mycube[3].style.border= 'dashed'
  }