basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(2000)
basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.pause(1000)
})
