const par = (a)=>{
   if(a%2 ==0){
    console.log(`${a} es un numero par`);
   }else{
    console.log(`${a} es un numero impar`);
   };
};
par(5);

const numeroMayor = (a, b) =>{
    if(a>b){
        console.log(`${a} es mayor a ${b}`)
    } else if (a<b){
        console.log(`${a} es menor a ${b}`)
    } else{
        console.log(`Son iguales`);
    }
}
numeroMayor(14, 14);
const multiploDe = (a) =>{
    if(a%5 ==0){
        console.log(`${a} es multiplo de 5`);
    }else{
        console.log(`${a} no es multiplo de 5`);
    }
}
multiploDe (10);

const cuentaAvance = (n) =>{
    for (i=0; i<n.length; i++){
     console.log(n)
}
}
cuentaAvance(7)
const repeticion = (palabra,n) =>{
    for (i =0; i < n ; i++) {
        console.log(`${palabra}`);
    }
}
repeticion("hola", 5);

arrHogar=["casa", "casita", "dpto.", "choza", "casilla", "palacio"]

const eleccionVivienda =(arr) =>{
    for (i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}
eleccionVivienda(arrHogar);

arrNumeros= [5, 4, 3, 34, 32, 3, 12, 1, 2, 21];

const quintoLugar = (arr) =>{
    for(i=0; i<arr.length; i++){
    }
}
quintoLugar(arrNumeros);