interface Expirable{
    expiryDate:Date;
}
interface VanillaCake extends Expirable{

}
interface ChocolateCake extends Expirable{

}


const vanillacakes:VanillaCake[]=[
    {expiryDate:new Date()}
];

const chococakes:ChocolateCake[]=[
    {expiryDate:new Date()}
];

//function to get only expired items from both lists
const getExpiredItems=<item extends Expirable>(items:Array <item>)=>{
    const currentDate=new Date().getTime();
return items.filter(item=>item.expiryDate.getDate()<currentDate);
}
const expiredChocoCakes=getExpiredItems<ChocolateCake>(chococakes)
const expiredVanillaCakes=getExpiredItems<VanillaCake>(vanillacakes)