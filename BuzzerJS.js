basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P1)) {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    }
})
