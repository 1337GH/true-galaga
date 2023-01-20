namespace SpriteKind {
    export const shield = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    defense()
    laser = false
})
function attack () {
    while (true) {
        projectile3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Ship, 0, 75)
        pause(200)
    }
}
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    laser = true
    attack()
})
function defense () {
    shield = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 9 . . . . . . . . . . . . 9 
        . . 9 9 . . . . . . . . . . . 9 
        . . . 9 9 . . . . . . . . . . 9 
        . . . . 9 9 . . . . . . . . . 9 
        . . . . . 9 9 . . . . . . 9 9 . 
        . . . . . . . 9 9 9 . 9 9 9 . . 
        . . . . . . . . . 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.shield)
    shield.follow(Ship, 75)
}
let shield: Sprite = null
let projectile3: Sprite = null
let laser = false
let Ship: Sprite = null
Ship = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 3 3 . . . . . . 
    . . . . . . . 3 3 3 . . . . . . 
    . . . . . . 3 3 . . 3 . . . . . 
    . . . . 3 3 . 3 . . . 3 . . . . 
    . . . 3 . . . 3 . . . . 3 . . . 
    . . . . . . . 3 . . . . . 3 3 . 
    . . . . . . . 3 . . . . . . . 3 
    . . . . . . 3 . . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Ship, 75, 0)
