let current_users: string[] = ["admin", "user2", "user3", "user4", "user5"];
let new_users :string[] = ["USER6", "User7", "User8", "admin"];

new_users.forEach(newUser => {
    if(current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} Please enter a new username`);
        
    } else{
        console.log(`${newUser} is available`);
        
    }
})