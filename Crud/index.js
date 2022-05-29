lista = [

]
tablas= []

let editar = (parIndex) => {
    let position = document.getElementById('position').value = parIndex;
    let nameUser = document.getElementById('nameUser').value = lista[parIndex].archivo;
    let code = document.getElementById('code').value = lista[parIndex].archivo2;
}

const borrar = (parIndex) => {
    tablas.splice(parIndex,1)
    document.getElementsByTagName("tbody")[0].removeChild('info');
    grabar(tablas)
}

const actualizar = (parIndex) => {
    let position = document.getElementById('position').value = parIndex;
    borrar(parIndex)
        grabar()
//     let position = document.getElementById('position').value;
//     let nameUser = document.getElementById('nameUser').value;
//     let code = document.getElementById('code').value;

//     if (position == '' || isNaN(position)){
//         alert('Debe seleccionar un registro');
//         return false;
//     }
//     lista[position] = {archivo,archivo2}
//     let archivo2= codigo.value
//     let archivo= nameuser.value
//     document.getElementById('position').value = '';
//     document.getElementById('nameUser').value = '';
//     document.getElementById('code').value = '';
//     grabar(lista);
}


const grabar = () =>{
    let nameuser = document.getElementById('nameUser');
    console.log(nameuser.value);
    let codigo = document.getElementById('code');
    console.log(codigo.value);
    let archivo2= codigo.value
    let archivo= nameuser.value
    lista.push({archivo,archivo2});
    nameuser.value = null;
    codigo.value = null;
    cambiar();
console.log(tablas)
}


const cambiar = () => {
let usuario = document.createElement("tr");
    lista.forEach((element,index) => { 
        localStorage.setItem('nombre', element.archivo,);
        localStorage.setItem('nombre2', element.archivo2);
        localStorage.setItem('dato', (index+1));
    usuario.innerHTML = `
    <td scope="row" id="popc">${localStorage.getItem('dato')}</td>
    <td id="pops">${localStorage.getItem('nombre')}</td>
    <td id="popS">${localStorage.getItem('nombre2')}</td>
    <td id="popc">
        <button type="button" class="btn btn-primary" onclick="editar(${index})">
            Editar
        </button>
        <button type="button" class="btn btn-danger" onclick="borrar(${index})">
            Borrar
        </button>
    </td>`;
    tablas.push(usuario)
    localStorage.setItem('info',tablas)
    document.getElementsByTagName("tbody")[0].appendChild(tablas[index]);
    

});

}

console.log(lista)