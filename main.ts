let randomnumber = 0
input.onGesture(Gesture.Shake, function () {
    randomnumber = randint(1, 3)
    if (randomnumber == 1) {
        basic.showIcon(IconNames.Asleep)
    } else if (randomnumber == 2) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.showIcon(IconNames.Surprised)
    }
})
