function findthelongestword(avengers) {
    let longestword = param [0];
    for(let i = 0; i <longestword.length; i++) {
        if(param[i] && (param[i].length > longestword.length)){
            longestword = param[i];
            console.log('Entro', longestword);
        }
    }
    console.log('retorno' ,longestword)
    return longestword;
}

findthelongestword(avengers);

