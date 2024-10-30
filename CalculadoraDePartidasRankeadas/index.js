function setLevelRanked(win, loss) {
    return win - loss
}

function setRank(level) {
    switch (true) {

        case (level < 10):
            rank = "Ferro"
            break;
        case (level >= 11 && level <= 20):
            rank = "Bronze"
            break;
        case (level >= 21 && level <= 50):
            rank = "Prata"
            break;
        case (level >= 51 && level <= 80):
            rank = "Ouro"
            break;
        case (level >= 81 && level <= 90):
            rank = "Diamante"
            break;
        case (level >= 91 && level <= 100):
            rank = "Lendário"
            break;
        case (level >= 101):
            rank = "Imortal"
            break;

        default:
            rank = "não definido"
    }
    return rank
}

function showLevelAndRank(level, rank) {

    console.log(`O Herói tem de saldo de ${level} está no nível de ${rank}`);
}

let myWin = 1000
let myLoss = 5
let myRank = ""
let myLevel = ""

myLevel = setLevelRanked(myWin, myLoss)
myRank = setRank(myLevel)
showLevelAndRank(myLevel, myRank)