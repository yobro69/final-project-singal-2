// Send radio to turn either turn on light and buzzer or not
radio.onReceivedNumber(function (receivedNumber) {
    Distance = receivedNumber
    if (Distance <= 5) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(100)
        music.playTone(988, music.beat(BeatFraction.Half))
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        music.stopAllSounds()
    }
})
// Set radio signal to 216
let Distance = 0
radio.setGroup(216)
