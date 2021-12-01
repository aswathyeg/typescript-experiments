"use strict";
const vanillacakes = [
    { expiryDate: new Date() }
];
const chococakes = [
    { expiryDate: new Date() }
];
//function to get only expired items from both lists
const getExpiredItems = (items) => {
    const currentDate = new Date().getTime();
    return items.filter(item => item.expiryDate.getDate() < currentDate);
};
const expiredChocoCakes = getExpiredItems(chococakes);
const expiredVanillaCakes = getExpiredItems(vanillacakes);
