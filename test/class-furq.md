## Classes
<dl>
<dt><a href="#FurQ">FurQ</a> ⇐ <a href="#Rapper">Rapper</a></dt>
<dd><p>C*ck, b!tch, c*ck, b!tch, m*therf!cker. You gotta kill people, to respect people.</p>
</dd>
<dt><a href="#Rapper">Rapper</a></dt>
<dd></dd>
</dl>
## Functions
<dl>
<dt><a href="#plant">plant()</a></dt>
<dd><p>to plant ones fist in a buster&#39;s mush</p>
</dd>
</dl>
## FurQ ⇐ [Rapper](#Rapper)
C\*ck, b!tch, c\*ck, b!tch, m\*therf!cker. You gotta kill people, to respect people.

**Kind**: global class  
**Extends:** [Rapper](#Rapper)  
**Emits**: [pop](#FurQ#event_pop), [slap](#FurQ#event_slap)  
**Access:** public  
**See**: https://www.youtube.com/watch?v=1sxZ4tsp8gc  
**Author:** Chris Morris  

* [FurQ](#FurQ) ⇐ [Rapper](#Rapper)
  * [new FurQ()](#new_FurQ_new)
  * _instance_
    * [.wannaTryIt](#FurQ#wannaTryIt) : string
    * [.LOVE](#FurQ#LOVE) : string
    * [.spit()](#FurQ#spit)
    * [.battle()](#Rapper#battle)
    * [.punch()](#FurQ#punch)
    * ["pop" (zoop)](#FurQ#event_pop)
    * ["slap"](#FurQ#event_slap)
    * _standard_
      * [.kill()](#FurQ#kill)
      * [.respect(done)](#FurQ#respect)
  * _static_
    * [.enemy](#FurQ.enemy) : number
    * ~~[.peace()](#FurQ.peace)~~
  * _inner_
    * [~onRespect](#FurQ..onRespect) : function

### new FurQ()
She's an Uzi lover. 

![uzi](https://sampleface.co.uk/wp-content/uploads/2013/07/fur-q-uzi-lover.png)

**Example**  
var uziLover = require("FurQ");

### furQ.wannaTryIt : string
**Kind**: instance property of [FurQ](#FurQ)  
**Default**: <code>&quot;bitch&quot;</code>  
**See**

- "Uzi like a metal dick in my hand."
- "Magazine like a big testicle gland."

### furQ.LOVE : string
**Kind**: instance constant of [FurQ](#FurQ)  
**Default**: <code>&quot;UZI&quot;</code>  
### furQ.spit()
override

**Kind**: instance method of [FurQ](#FurQ)  
**Overrides:** [spit](#Rapper#spit)  
### furQ.punch()
to plant ones fist in a buster's mush

**Kind**: instance method of [FurQ](#FurQ)  
### "pop" (zoop)
fire weapon

**Kind**: event emitted by [FurQ](#FurQ)  

| Param | Type | Description |
| --- | --- | --- |
| zoop | boolean | make 'zooping' sound as you fire |

### "slap"
slap man

**Kind**: event emitted by [FurQ](#FurQ)  
### furQ.kill()
kill

**Kind**: instance method of [FurQ](#FurQ)  
**Category**: standard  
**Example**  
var kill = uziLover.kill();
    

**Example**  
uziLover.kill();

### furQ.respect(done)
respect

**Kind**: instance method of [FurQ](#FurQ)  
**Category**: standard  

| Param | Type | Description |
| --- | --- | --- |
| done | [onRespect](#FurQ..onRespect) | called on reciprocation of respect |

**Example**  
uziLover.respect(function(err, gain){
    console.log(gain);
});

### FurQ.enemy : number
FUR-Q enemy types

**Kind**: static enum property of [FurQ](#FurQ)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| COCK | number | <code>0</code> | an awful individual |
| BITCH | number | <code>1</code> |  |
| MUTHAFUCKA | number | <code>2</code> |  |

### ~~FurQ.peace()~~
***Deprecated***

check if at peace

**Kind**: static method of [FurQ](#FurQ)  
**Example**  
var peace = FurQ.peace();

### FurQ~onRespect : function
Passed to [respect](#FurQ#respect)

**Kind**: inner typedef of [FurQ](#FurQ)  

| Param | Type | Description |
| --- | --- | --- |
| err | Error | an issue with the punch |
| gain | \* | the respect percentage gained |

## Rapper
**Kind**: global class  

* [Rapper](#Rapper)
  * _instance_
    * [.spit()](#Rapper#spit)
    * [.battle()](#Rapper#battle)
  * _static_
    * [.train()](#Rapper.train)
      * [~School](#Rapper.train..School)
        * [new School()](#new_Rapper.train..School_new)
        * [.bestStudent](#Rapper.train..School#bestStudent)

### rapper.spit()
spit

**Kind**: instance method of [Rapper](#Rapper)  
### rapper.battle()
battle

**Kind**: instance method of [Rapper](#Rapper)  
### Rapper.train()
train new rappers

**Kind**: static method of [Rapper](#Rapper)  

  * [.train()](#Rapper.train)
    * [~School](#Rapper.train..School)
      * [new School()](#new_Rapper.train..School_new)
      * [.bestStudent](#Rapper.train..School#bestStudent)

#### train~School
**Kind**: inner class of [train](#Rapper.train)  

* [~School](#Rapper.train..School)
  * [new School()](#new_Rapper.train..School_new)
  * [.bestStudent](#Rapper.train..School#bestStudent)

##### new School()
rap school

##### school.bestStudent
best student

**Kind**: instance property of [School](#Rapper.train..School)  
## plant()
to plant ones fist in a buster's mush

**Kind**: global function  
