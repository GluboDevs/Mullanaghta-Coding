input.onButtonPressed(Button.A, function () {
    people += 1
})
input.onButtonPressed(Button.B, function () {
    people += -1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(659, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Breve))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
})
music.play(music.tonePlayable(523, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
music.setVolume(100)
let people = 0
music.setTempo(300)
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P5, DigitalPin.P8)
basic.forever(function () {
    basic.showNumber(Math.abs(people))
})
