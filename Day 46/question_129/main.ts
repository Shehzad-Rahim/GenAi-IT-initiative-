const traditionalVsArrow = {
  value: "traditionalVsArrow value",
  traditionalFunction: function () {
    console.log("Traditional function:", this.value);
  },
  arrowFunction:  () => {
    console.log("Arrow function:", this.value); // its error because 'this' can not capture global scope value
  },
};

traditionalVsArrow.traditionalFunction(); 
traditionalVsArrow.arrowFunction();