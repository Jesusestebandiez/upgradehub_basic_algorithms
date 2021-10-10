//Iteración #1: Usa includes

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];
for (let i=0; i < products.length;i++){
    if(products[i].includes("Camiseta")){
        console.log(products[i])
    }
}


//Iteración #2: Condicionales avanzados

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for(let i=0; i < alumns.length;i++){
    let count = 0
    if(alumns[i].t1){count++}
    if(alumns[i].t2){count++}
    if(alumns[i].t3){count++}
    if(count>=2){
        alumns[i].isAppved =true
    } else{
        alumns[i].isAppved =false
    }
}

console.log(alumns);


//**Iteración #3: Probando For...of**

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for(let places of placesToTravel){
    console.log(places);
}

//**Iteración #4: Probando For...in**

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(let key in alien){
    console.log(alien[key])
}

//**Iteración #5: Probando For**

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}];
for (let i = 0; i < placesToTravel.length; i++) {
    if (placesToTravel[i].id!=40&&placesToTravel[i].id!=11){
        placesToTravel.filter.push(placesToTravel[i])
    }
}

console.log(placesToTravel);

//Iteración #6: Mixed For...of e includes

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

    for(const toy of toys){
        if(toy.name.includes(gato)){
            toy.splice(toys.indexOf(toy))
        }
    }

    console.log(toys);

    //Iteración #7: For...of avanzado

const popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

for(const toy of toys){
    if (toy.sellCount>15){
        popularToys.push(toy)
    }
}

console.log(toys);