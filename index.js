const { Soldier, Viking, Saxon, War } = require('./src/viking')

// Soldier
const soldier = new Soldier(300, 150)
// console.log( soldier )  ///==>  soldier  ->   attack: [Fun], receiveDamage: [Fun], health: 300, strength: 150
// console.log( Soldier.length )///==>    ->   2
// console.log( soldier.health )///==>    ->   300
// console.log( soldier.strength )///==>    ->   150
// console.log(typeof soldier.attack )///==>    ->   function
// console.log( soldier.attack.length )///==>    ->   0
// console.log( soldier.attack() === soldier.strength)///==>    ->   true
// console.log(typeof soldier.receiveDamage )///==>    ->   function
// console.log( soldier.receiveDamage.length )///==>    ->   1
// console.log( soldier.receiveDamage(50)  )///==>    ->   undefined



const { addViking, addSaxon, vikingAttack, saxonAttack, showStatus, vikingArmy, saxonArmy } = new War()
///==> vikingAttack   ->   [Function: vikingAttack]

 