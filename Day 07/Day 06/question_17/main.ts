let friends: string [] = 
[   "Nizam", "Amjad", "Islam", "Ijaz" ];


console.log("Sorry I can just invite two friends");

while(friends.length > 2) {
    let  removeFriends = friends.pop();
    console.log(`Sorry ${removeFriends} I spent all my money on 
    my wife's make up so I have to cancel your dinner I appology!`);
    
}

friends.forEach(friend =>{
    console.log(`Dont worry ${friend} you can come and enjoy dinner with me`);
    
} )

friends.splice(0, friends.length);
console.log(friends);

