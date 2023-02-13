// non da fcc
// without = {} in the right-hand side of the func we would get Cannot read property 'size' of undefined
// questa implementazione ci permette di invocare la fn sia senza oggetto che con 
function drawChart( {size = 'big', coords = {x: 0, y: 0}, radius = 25} = {} ) {
    console.log(size, coords, radius);
}
  
drawChart({
    coords: {x: 18, y: 30},
    radius: 30
});

drawChart();