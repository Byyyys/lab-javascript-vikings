
# LAB | lab-javascript-vikings

## Introduction

**我们已经学习了面向对象编程，以及在JavaScript中“类”和继承是如何工作的。现在让我们和我们的维京朋友一起工作，应用我们刚刚学到的所有概念**  

**内容： JavaScript面向对象的 单元测试 Soldier、Viking、Saxon、War**

<br>

## Requirements

- Fork this repo.
- Clone this repo.

<br>

## 提交
— 执行完成后，执行如下命令:


```bash
$ git add .
$ git commit -m "Solved lab"
$ git push origin master
```

- 创建一个Pull Request，这样你的助教可以检查你的工作。

<br>

### Test, test, test!

该实验室配备了单元测试，以提供对实验进展的自动反馈。
这一次，您将从一开始就使用测试，并将它们与迭代说明一起使用。
请打开你的终端，把目录切换到实验室的根目录，然后运行' npm install '来安装测试运行器。接下来，运行' npm run test:watch '命令来运行自动测试。


```shell
$ cd lab-javascript-vikings
$ npm install
$ npm run test:watch
```

<br>

**使用[Live Server]插件  VSCode扩展名打开结果“lab-solution.html”文件，查看测试结果** 
您将看到大多数测试都失败了。让我们开始工作，让他们都通过!


**Note:**  测试环境和' lab-solution.html '页面不允许在浏览器中打印_console logs_。

To see the console.log outputs you write in the `viking.js` file, open the `index.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.

<br>

## Instructions

你将处理' src/viking.js '文件。
你的任务是在' src/viking.js '文件中编写正确的代码，使测试通过。在这个文件中，你会发现以下启动器代码:

```javascript
// Soldier
class Soldier {}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
```



###Iteration 0: First test


让我们一起来看看第一个测试用例，以帮助您开始。

第一个测试用例说 '_Soldier class>>应该接收2个参数(health & strength)'  因此我们必须编写正确的代码来通过这个测试。让' Soldier '类接收两个参数:

```javascript
// Soldier
class Soldier {
  constructor(health, strength) {}
}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
```

<br>



### Iteration 1: Soldier

修改' Soldier '类   并添加2个方法:' attack() '和' receiveDamage() '。
#### class

- should receive **2 arguments** (health & strength)
- should receive the **`health` property** as its **1st argument**
- should receive the **`strength` property** as its **2nd argument**

#### `attack()` method

- should be a function
- should receive **0 arguments**
- should return **the `strength` property of the `Soldier`**

#### `receiveDamage()` method

- should be a function
- should receive **1 argument** (the damage)
- should remove the received damage from the `health` property
- **shouldn't return** anything

<br>

### Iteration 2: Viking

A `Viking` is a `Soldier` with an additional property, their `name`. They also have a different `receiveDamage()` method and new method, `battleCry()`.

Modify the `Viking` class, have it inherit from `Soldier`, re-implement the `receiveDamage()` method for `Viking`, and add a new `battleCry()` method.

“维京人”是一个“士兵”，他们有一个额外的属性，他们的“名字”。它们也有不同的“receiveDamage()”方法和新方法“battleCry()”。
修改' Viking '类，让它继承自' Soldier '，为' Viking '重新实现' receiveDamage() '方法，并添加一个新的' battleCry() '方法。

#### inheritance

- `Viking` should **extend** `Soldier`

#### class

- should receive **3 arguments** (name, health & strength)
- should receive the **`name` property** as its **1st argument**
- should receive the **`health` property** as its **2nd argument**
- should receive the **`strength` property** as its **3rd argument**

#### `attack()` method

(This method should be **inherited** from `Soldier`, no need to re-implement it.)

- should be a function
- should receive **0 arguments**
- should return **the `strength` property of the `Viking`**

#### `receiveDamage()` method

This method needs to be **re-implemented** for `Viking` because the `Viking` version needs to have different return values.

- should be a function
- should receive **1 argument** (the damage)
- should remove the received damage from the `health` property
- **if the `Viking` is still alive**, it should return **"NAME has received DAMAGE points of damage"**
- **if the `Viking` dies**, it should return **"NAME has died in act of combat"**

#### `battleCry()` method

[Learn more about battle cries](http://www.artofmanliness.com/2015/06/08/battle-cries/).

- should be a function
- should receive **0 arguments**
- should return **"Odin Owns You All!"**

<br>

### Iteration 3: Saxon

A `Saxon` is a weaker kind of `Soldier`. Unlike a `Viking`, a `Saxon` has no name. Their `receiveDamage()` method will also be different than the original `Soldier` version.

Modify the `Saxon`, constructor function, have it inherit from `Soldier` and re-implement the `receiveDamage()` method for `Saxon`.

#### inheritance

- `Saxon` should extend `Soldier`

#### class

- You don't have to include constructor method since this class will inherit perfectly from the parents class, both, the health and the strength (it `extends` Soldier class :wink: )

#### `attack()` method

This method should be **inherited** from `Soldier`, no need to re-implement it.

- should be a function
- should receive **0 arguments**
- should return **the `strength` property of the `Saxon`**

#### `receiveDamage()` method

This method needs to be **re-implemented** for `Saxon` because the `Saxon` version needs to have different return values.

- should be a function
- should receive **1 argument** (the damage)
- should remove the received damage from the `health` property
- **if the Saxon is still alive**, it should return **_"A Saxon has received DAMAGE points of damage"_**
- **if the Saxon dies**, it should return **_"A Saxon has died in combat"_**

<br>

### BONUS - Iteration 4: War

Now we get to the good stuff: WAR! Our `War` class will allow us to have a `Viking` army and a `Saxon` army that battle each other.

Modify the `War` class and add 5 methods to its `class`:

- `addViking()`
- `addSaxon()`
- `vikingAttack()`
- `saxonAttack()`
- `showStatus()`

#### class

When we first create a `War`, the armies should be empty. We will add soldiers to the armies later.

- should receive **0 arguments**
- should assign an empty array to the **`vikingArmy` property**
- should assign an empty array to the **`saxonArmy` property**

#### `addViking()` method

Adds 1 `Viking` to the `vikingArmy`. If you want a 10 `Viking` army, you need to call this 10 times.

- should be a function
- should receive **1 argument** (a `Viking` object)
- should add the received `Viking` to the army
- **shouldn't return** anything

#### `addSaxon()` method

The `Saxon` version of `addViking()`.

- should be a function
- should receive **1 argument** (a `Saxon` object)
- should add the received `Saxon` to the army
- **shouldn't return** anything

#### `vikingAttack()` method

A `Saxon` (chosen at random) has their `receiveDamage()` method called with the damage equal to the `strength` of a `Viking` (also chosen at random). This should only perform a single attack and the `Saxon` doesn't get to attack back.

- should be a function
- should receive **0 arguments**
- should make a `Saxon` `receiveDamage()` equal to the `strength` of a `Viking`
- should remove dead saxons from the army
- should return **result of calling `receiveDamage()` of a `Saxon`** with the `strength` of a `Viking`

#### `saxonAttack()` method

The `Saxon` version of `vikingAttack()`. A `Viking` receives the damage equal to the `strength` of a `Saxon`.

- should be a function
- should receive **0 arguments**
- should make a `Viking` `receiveDamage()` equal to the `strength` of a `Saxon`
- should remove dead vikings from the army
- should return **result of calling `receiveDamage()` of a `Viking`** with the `strength` of a `Saxon`

<br>

### SUPER BONUS - Iteration 5

Since there is a lot of repetitive code in the previous two iterations, _vikingAttack()_ and _saxonAttack()_ try to create one _generic_ method and call it in the case of _vikingAttack_ and in the case of _saxonAttack_ instead of using almost the same code for both methods. (This iteration doesn't have test, so ask your TAs and your instructor to give you feedback on the quality of your code after the refactor.)

#### `showStatus()` method

Returns the current status of the `War` based on the size of the armies.

- should be a function
- should receive **0 arguments**
- **if the `Saxon` array is empty**, should return **_"Vikings have won the war of the century!"_**
- **if the `Viking` array is empty**, should return **_"Saxons have fought for their lives and survived another day..."_**
- **if there are at least 1 `Viking` and 1 `Saxon`**, should return **_"Vikings and Saxons are still in the thick of battle."_**

**Happy Coding!** 💙
