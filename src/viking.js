// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }
  attack = () => {
    return this.strength
  }

  receiveDamage = (damage) => {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength) /// super可以调用 父亲的 属性和方法   health, strength, attack(), receiveDamage()
    this.name = name
  } 
  receiveDamage = (damage) => {
    this.health -= damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }else{
      return `${this.name} has died in act of combat`
    }
  }

  battleCry = () => {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength)
  }
  receiveDamage = (damage) => {
    this.health -= damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }else{
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking = (viking) => {
    this.vikingArmy.push(viking) 
  }
  addSaxon = (Saxon) => {
    this.saxonArmy.push(Saxon)
  }
  vikingAttack = () => {
    var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    var randomSaxon= Math.floor(Math.random()*this.saxonArmy.length);
    var res = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    if(this.saxonArmy[randomSaxon].health<=0){
      this.saxonArmy.splice(randomSaxon,1)
    }
    return res;
  }
  saxonAttack = () => {
    var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    var randomSaxon= Math.floor(Math.random()*this.saxonArmy.length);
    var selectedViking = this.vikingArmy[randomViking]
    var selectedSaxon = this.saxonArmy[randomSaxon]
    var res = selectedViking.receiveDamage(selectedSaxon.strength);
    if(selectedViking.health<=0){
      this.vikingArmy.splice(randomViking,1)
    }
    return res;
  }
  showStatus = () => {
    if(this.saxonArmy.length === 0 ){
      return "Vikings have won the war of the century!"
    }else if(this.vikingArmy.length === 0 ){
      return `Saxons have fought for their lives and survived another day...`
    }else {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }

}










if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
