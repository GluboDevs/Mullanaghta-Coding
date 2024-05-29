input.onButtonPressed(Button.A, function () {
    score_points += 1
})
input.onButtonPressed(Button.AB, function () {
    score_goals += 1
})
input.onButtonPressed(Button.B, function () {
    score_points += -1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    score_goals += -1
})
let score_points = 0
let score_goals = 0
basic.forever(function () {
    basic.showNumber(score_goals)
    basic.clearScreen()
    basic.pause(500)
    basic.showNumber(score_points)
})
