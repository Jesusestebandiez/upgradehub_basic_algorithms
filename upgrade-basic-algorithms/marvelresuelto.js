let marvelCharacters =[
    {
        name:"Spider-man",
        alias: "peter parker",
        power:120,
        goodside: true,
        group: "Avengers"

    },

    {
        name: "Magneto",
        alias: "Eric",
        power:95,
        goodside:false,
        group: "Mutants"
    },

    {
        name: "Wolverine",
        alias: "Logan",
        power: 90,
        goodSide: true,
        group: "Avengers"
    },
    {
        name: "Dr.Strange",
        alias: "Stephen Strange",
        power: 100,
        goodSide: true,
        group: "Iluminati"
    },
    {
        name: "Bruja Escarlata",
        alias: "Wanda Maximoff",
        power: 150,
        goodSide: false,
        group: "Mutants"
    }
]
// Recorrer a mis personajes -> power +100
// Recorrer a mis personajes -> Iluminati
// Recorrer a mis personajes -> Buenos: goodSide true / Malos: goodSide false
// Crear un array llamado good -> pushear 
// Crear un array llamado bads -> pushear
let good =[];
let bad =[];
for ( let i = 0; i <marvelCharacters.length;i++) {
if(marvelCharacters [i].power >= 100) {
    console.log("IT1: ", marvelCharacters[i].name)
}
if (marvelCharacters [i].group >= 100){
    console.log("IT2: ", marvelCharacters[i].name)
}
if (marvelCharacters[i].goodside){
good.push(marvelCharacters[i].name)
} else{
    bads.push(marvelCharacters[i].name)
    }
}   
console.log("IT3", good)
console.log("IT3", bads)
