var friends = ["Nizam", "Amjad", "Islam", "Ijaz"];
console.log("We Have more friends in the \ninvitation list so we are extending our dinner table ");
friends.unshift("Usman");
friends.splice(friends.length / 3, 0, "Anees");
friends.push("Zaman");
friends.forEach(function (name) {
    console.log("Hello Dear '".concat(name, "' I am inviting you for a dinner\n    at my place on saturday night at 10pm, I hope you will come on time."));
});
