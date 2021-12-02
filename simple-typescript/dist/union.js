"use strict";
function callMyPet(pet) {
    pet.walk();
    if (pet.bark) {
        pet.bark();
    }
    else {
        pet.meaw();
    }
}
