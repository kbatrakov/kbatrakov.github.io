const colorRange = ['blue', 'black', 'pink', 'darkblue', 'darkcyan', 'dodgerblue', 'mediumpurple']
let i = 0

function colorChange(){
    document.body.style.backgroundColor = colorRange[i];
    i++;
    if( i >= colorRange.length){
        i = 0
    }
}
































