namespace SpriteKind {
    export const shield = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sheild_true = true
    defense()
    laser = false
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    laser = true
    attack()
    if (sheild_true) {
        shield.destroy()
        sheild_true = false
    }
})
function attack () {
    if (laser) {
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
            `, Ship, 0, -75)
    }
}
function defense () {
    shield = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . 9 9 . . . . . . 9 9 . . . 
        . . 9 . . . . . . . . . . 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.shield)
    shield.setPosition(Ship.x, Ship.y + -6)
}
let projectile3: Sprite = null
let shield: Sprite = null
let laser = false
let sheild_true = false
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
Ship.setPosition(51, 104)
controller.moveSprite(Ship, 75, 0)
forever(function () {
    if (sheild_true) {
        shield.setVelocity(Ship.vx, 0)
    }
})
