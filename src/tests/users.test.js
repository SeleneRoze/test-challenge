// You already have the methods imported
import { default as expect } from "expect";
import { getUser, getUsers } from "../users";

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation

const users = require ("../data"); 
const { 
    getUserById, 
    getUserByUserName, 
    validatePassword, 
} = require("../users");

describe ('getUserById', () => { 
    it('it should retrieve the correct user for a given ID', () => { 
        const user = users[0]; 
        expect(getUserById(1)).toEqual(user);
    });

    it("it should failto get the user", () => { 
        const user = users[2]; 
        expect(getUserById(3)).toEqual (user);
    })

});

describe("getUserByUserName", () => {
    it('it should find a user by their username', () => { 
        const user = getUserByUserName('FloraFauna')
        expect(user).toHaveProperty('username', 'FloraFauna');
        expect(user).toHaveProperty("id", 4);
    });
it("Should return undefined for non existend users", () => {
    const user = getUserByUserName("goosemontionless");
    expect(user).toBeUndefined(); 
})
});
