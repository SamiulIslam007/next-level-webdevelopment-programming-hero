"use strict";
// spread operator
Object.defineProperty(exports, "__esModule", { value: true });
const frineds = ["Rahim", "Karim"];
const schoolFriends = ["Pintu", "Chintu"];
const collegeFriends = ["Mr. Smart", "Mr. Boka*"];
frineds.push(...schoolFriends);
// console.log(frineds);
// ["Rahim", "Karim", ["Pintu", "Chintu"]]
// যা ভুল structure।
// TS তোমাকে আগেই বলছে:
// 👉 “Ei line ta future e bug dibe, change it.”
// Erokom output er jonno
// const frineds: (string | string[])[] = ["Rahim", "Karim"];
const user = {
    name: "samiul",
    phoneNum: "017xxxxxxx",
};
const otherInfo = {
    hoddy: "programming",
    favouriteFood: "biryani",
};
const userInfo = { ...user, ...otherInfo };
// rest operator
const sendInvite = (...friends) => {
    friends.forEach((friend) => console.log(`Dear ${friend}, you are invited to my marriage ceremony`));
    //   console.log(`Dear ${friend1}, you are invited to my marriage ceremony.`);
    //   console.log(`Dear ${friend2}, you are invited to my marriage ceremony.`);
    //   console.log(`Dear ${friend3}, you are invited to my marriage ceremony.`);
};
sendInvite("Rahim", "Karim", "Pintu", "Chintu");
//# sourceMappingURL=spreadAndRest.js.map