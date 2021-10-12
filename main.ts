let electrical_level = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    electrical_level = pins.digitalReadPin(DigitalPin.P1)
    pins.digitalWritePin(DigitalPin.P2, electrical_level)
})
