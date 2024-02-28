class heroClass {
    constructor(name, age, type, attack){
        this.name = name
        this.age = age
        this.type = type
        this.attack = attack
    }

    performAttack(){
        switch (this.type){
            case "mago":
            this.attack = "magia"
            console.log(`O ${this.type} ${this.name} atacou usando ${this.attack}`)
            break

            case "guerreiro":
            this.attack = "espada"
            console.log(`O ${this.type} ${this.name} atacou usando ${this.attack}`)
            break

            case "monge":
            this.attack = "artes marciais"
            console.log(`O ${this.type} ${this.name} atacou usando ${this.attack}`)
            break

            case "ninja":
            this.attack = "shuriken"
            console.log(`O ${this.type} ${this.name} atacou usando ${this.attack}`)
            break
        }
    }
}

let hero = new heroClass ("Trevor", "45", "guerreiro")

hero.performAttack()

let hero2 = new heroClass ("Sypha", "32", "mago")

hero2.performAttack()


