"use strict";
const students = new Map();
students.set(1, "Shehzad");
students.set(2, "Wasif");
students.set(3, "Rafay");
students.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});
