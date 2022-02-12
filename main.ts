controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    message = ""
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(message)
    message = ""
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
let mySprite2 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
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
"ĥ",
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
"\"",
":",
";",
"(",
")",
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9"
]
mySprite2.setPosition(80, 110)
forever(function () {
    mySprite.sayText(characters[letternumber])
    mySprite2.sayText(message)
})
