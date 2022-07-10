input.onButtonPressed(Button.A, function () {
    modules.led1.setAll(0xff0000)
})
input.onButtonPressed(Button.B, function () {
    modules.led1.setAll(0x0000ff)
})
input.onButtonPressed(Button.AB, function () {
    modules.led1.setAll(0x000000)
})
modules.led1.setBrightness(9)
basic.forever(function () {
    led.plotBarGraph(
    modules.potentiometer1.position(),
    100
    )
})
