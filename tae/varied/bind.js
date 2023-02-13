const modulo = {
    x: 42,
    getX: function() {
      return this.x;
    }
};
  
console.log(modulo.getX()); 
console.log(modulo.getX.bind(modulo)());