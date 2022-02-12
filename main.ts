controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    message = ""
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(message)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    message = "" + message + characters[letternumber]
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (letternumber == 0) {
        letternumber = characters.length - 1
    } else {
        letternumber += -1
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (letternumber == characters.length - 1) {
        letternumber = 0
    } else {
        letternumber += 1
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (letternumber >= characters.length - 2) {
        letternumber = 0
    } else {
        letternumber += 2
    }
})
let characters: string[] = []
let letternumber = 0
let message = ""
message = ""
letternumber = 0
characters = [
"a",
"b",
"c",
"ĉ",
"d",
"e",
"f",
"g",
"ĝ",
"h",
"i",
"j",
"ĵ",
"k",
"l",
"m",
"n",
"o",
"p",
"r",
"s",
"ŝ",
"t",
"u",
"ŭ",
"v",
"z",
" ",
".",
",",
"?",
"!",
":",
";",
"\"",
"(",
")"
]
let mySprite = sprites.create(img`
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 b c 5 5 d 4 c . . 
    . b b b b 5 5 5 b f d d 4 4 4 b 
    . b d 5 b 5 5 b c b 4 4 4 4 b . 
    . . b 5 5 b 5 5 5 4 4 4 4 b . . 
    . . b d 5 5 b 5 5 5 5 5 5 b . . 
    . b d b 5 5 5 d 5 5 5 5 5 5 b . 
    b d d c d 5 5 b 5 5 5 5 5 5 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
forever(function () {
    mySprite.sayText(characters[letternumber])
})
