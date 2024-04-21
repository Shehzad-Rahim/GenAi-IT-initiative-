async function fetchData(){

  function fetchSomething(){
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Shehzad');    // this will work after 3 secends
      }, 3000);   
    });}
  const data = await fetchSomething()
  console.log(data);}
fetchData();
console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
