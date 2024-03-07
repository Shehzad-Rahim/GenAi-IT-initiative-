let friends: string [] = 
[   "Nizam", "Amjad", "Islam", "Ijaz" ];

console.log(`We Have more friends in the 
invitation list so we are extending our dinner table `);

friends.unshift("Usman");
friends.splice( 3,0, "Anees");
friends.push("Zaman");

friends.forEach(name => {
    console.log(`Hello Dear '${name}' I am inviting you for a dinner
    at my place on saturday night at 10pm, I hope you will come on time.`);
});