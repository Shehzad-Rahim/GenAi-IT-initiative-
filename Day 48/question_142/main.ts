const helloPromise = new Promise<string>((resolve) =>{
  setTimeout(() => {
    console.log("Hello Shehzad");
    
  }, 2000);
});

helloPromise.then((message) => console.log(message));