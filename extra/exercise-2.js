const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
let x = 0;
for (let j = 0; j < (foodSchedule.length -1); j++){
    if(!foodSchedule[j].isVegan){
        foodSchedule[j] = {name:fruits[x],isVegan:true};
        x++;
    }
}
console.log(foodSchedule);
