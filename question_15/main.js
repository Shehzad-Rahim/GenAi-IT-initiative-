var friends = ["Nizam", "Amjad", "Islam", "Ijaz"];
var cantAttend = "Amjad";
console.log("".concat(cantAttend, " Can't Come to dinner"));
var newInvitation = "Mir Hassan";
friends[friends.indexOf(cantAttend)] = newInvitation;
friends.forEach(function (name) {
    console.log("Hello Dear '".concat(name, "' I am inviting you for a dinner\n    at my place on saturday night at 10pm, I hope you will come on time."));
});
