let friends: string [] = 
[   "Nizam", "Amjad", "Islam", "Ijaz" ];


let cantAttend : string = "Amjad";
console.log(`${cantAttend} Can't Come to dinner`);

let newInvitation : string = "Mir Hassan";
 friends[friends.indexOf(cantAttend)] = newInvitation

 friends.forEach(name => {
    console.log(`Hello Dear '${name}' I am inviting you for a dinner
    at my place on saturday night at 10pm, I hope you will come on time.`);
});