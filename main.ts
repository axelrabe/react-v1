let sparat_värde = ""
let textlista: string[] = []
function Skaka () {
    if (sparat_värde == "C") {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Skull)
        game.gameOver()
    }
}
function Nedräkning () {
    basic.showNumber(3)
    basic.pause(100)
    basic.showNumber(2)
    basic.pause(100)
    basic.showNumber(1)
    basic.pause(100)
    textlista = ["A", "B", "C"]
    sparat_värde = textlista._pickRandom()
    basic.showString(sparat_värde)
}
function Tryck_B () {
    if (sparat_värde == "B") {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Skull)
        game.gameOver()
    }
}
input.onButtonPressed(Button.A, function () {
    Tryck_A()
})
input.onButtonPressed(Button.AB, function () {
    Nedräkning()
})
input.onButtonPressed(Button.B, function () {
    Tryck_B()
})
input.onGesture(Gesture.Shake, function () {
    Skaka()
})
function Tryck_A () {
    if (sparat_värde == "A") {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Skull)
        game.gameOver()
    }
}
