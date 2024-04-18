try {
    
    throw new Error("Something went wrong");
  } catch (error:any) {
    console.log(error.message); 
  }