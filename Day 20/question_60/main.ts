let userProfile = (function() {
    let name = "Shehzad";
    let age = 22;
    return{
        displayInfo: function(){
            console.log(`Name: ${name}, Age: ${age}`);
            
        }
    }
}) ();

userProfile.displayInfo();
