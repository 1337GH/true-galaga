namespace SpriteKind {
    export const shield = SpriteKind.create()
    export const shooter = SpriteKind.create()
    export const Good = SpriteKind.create()
    export const Bad = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Good, SpriteKind.shooter, function (sprite, otherSprite) {
    for (let index = 0; index < 3; index++) {
        projectile22 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . a 1 a . . . . . . 
            . . . . . . . a 1 a . . . . . . 
            . . . . . . . a 1 a . . . . . . 
            . . . . . . . 8 1 8 . . . . . . 
            . . . . . . a 8 1 8 a . . . . . 
            . . . . . . a 1 1 1 a . . . . . 
            . . . . . . a 1 1 1 8 . . . . . 
            . . . . . . 8 1 1 1 8 . . . . . 
            . . . . . . 8 1 1 1 8 . . . . . 
            . . . . . . 8 1 1 1 8 . . . . . 
            . . . . . . a 8 1 8 a . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, otherSprite, -14, 100)
        projectile22 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . a 1 a . . . . . . 
            . . . . . . . a 1 a . . . . . . 
            . . . . . . . a 1 a . . . . . . 
            . . . . . . . 8 1 8 . . . . . . 
            . . . . . . a 8 1 8 a . . . . . 
            . . . . . . a 1 1 1 a . . . . . 
            . . . . . . a 1 1 1 8 . . . . . 
            . . . . . . 8 1 1 1 8 . . . . . 
            . . . . . . 8 1 1 1 8 . . . . . 
            . . . . . . 8 1 1 1 8 . . . . . 
            . . . . . . a 8 1 8 a . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, otherSprite, 0, 100)
        projectile22 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . a 1 a . . . . . . 
            . . . . . . . a 1 a . . . . . . 
            . . . . . . . a 1 a . . . . . . 
            . . . . . . . 8 1 8 . . . . . . 
            . . . . . . a 8 1 8 a . . . . . 
            . . . . . . a 1 1 1 a . . . . . 
            . . . . . . a 1 1 1 8 . . . . . 
            . . . . . . 8 1 1 1 8 . . . . . 
            . . . . . . 8 1 1 1 8 . . . . . 
            . . . . . . 8 1 1 1 8 . . . . . 
            . . . . . . a 8 1 8 a . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, otherSprite, 14, 100)
        pause(100)
    }
    otherSprite.destroy(effects.disintegrate, 500)
    sprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.shield)
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
            . . . . . . . f . . . . . . . . 
            . . . . . . f 1 f . . . . . . . 
            . . . . . f 1 2 1 f . . . . . . 
            . . . . . f 1 2 1 f . . . . . . 
            . . . . . f 1 2 1 f . . . . . . 
            . . . . . . f 1 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Ship, 0, -75)
        projectile3.setKind(SpriteKind.Good)
        projectile3.setFlag(SpriteFlag.AutoDestroy, true)
    }
}
sprites.onOverlap(SpriteKind.Bad, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Bad, SpriteKind.shield, function (sprite, otherSprite) {
    sprite.destroy(effects.trail, 500)
})
function defense () {
    shield = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f 1 1 1 1 1 1 f f . . . 
        . . f 1 1 9 9 9 9 9 9 1 1 f . . 
        . f 1 9 9 1 1 1 1 1 1 9 9 1 f . 
        f 1 9 1 1 f f f f f f 1 1 9 1 f 
        f 1 1 f f . . . . . . f f 1 1 f 
        f f f . . . . . . . . . . f f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.shield)
    shield.setPosition(Ship.x, Ship.y + -6)
}
sprites.onOverlap(SpriteKind.Good, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    sprite.destroy()
})
let Evil: Sprite = null
let Evil_red: Sprite = null
let projectile3: Sprite = null
let shield: Sprite = null
let laser = false
let sheild_true = false
let projectile22: Sprite = null
let Ship: Sprite = null
Ship = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f d d f . . . . . . 
    . . . . . f d 1 1 d f . . . . . 
    . . . . . f d 1 1 d f . . . . . 
    . . . . f d 1 1 1 1 d f . . . . 
    . . . . f d d d d d d f . . . . 
    . . . f d d d d d d d d f . . . 
    . . . . f d d d d d d f . . . . 
    . . . . . f 2 4 5 5 f . . . . . 
    . . . . . f 2 4 4 4 f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f 2 f f . . . . . . 
    . . . . . . . f . . . . . . . . 
    `, SpriteKind.Player)
Ship.setPosition(51, 104)
controller.moveSprite(Ship, 75, 0)
info.setLife(3)
game.onUpdate(function () {
	
})
game.onUpdateInterval(1000, function () {
    projectile22 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . a 1 a . . . . . . 
        . . . . . . . a 1 a . . . . . . 
        . . . . . . . a 1 a . . . . . . 
        . . . . . . . 8 1 8 . . . . . . 
        . . . . . . a 8 1 8 a . . . . . 
        . . . . . . a 1 1 1 a . . . . . 
        . . . . . . a 1 1 1 8 . . . . . 
        . . . . . . 8 1 1 1 8 . . . . . 
        . . . . . . 8 1 1 1 8 . . . . . 
        . . . . . . 8 1 1 1 8 . . . . . 
        . . . . . . a 8 1 8 a . . . . . 
        . . . . . . . a a a . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Evil_red, 0, 75)
    projectile22.setKind(SpriteKind.Bad)
    projectile22.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(850, function () {
    if (Math.percentChance(75)) {
        if (Math.percentChance(20)) {
            Evil_red = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . c . . . . . . . . 
                . . . . . c c c c c . . . . . . 
                . . . . c a a c a a c . . . . . 
                . . . . c b a c a b c . . . . . 
                . . . c c b b . b b c c . . . . 
                . . . a b c . . . c b a . . . . 
                . . . b c . . . . . c b . . . . 
                . . . b . . . . . . . b . . . . 
                . . . a b . . . . . b a . . . . 
                . . . . a . . . . . a . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.shooter)
            Evil_red.setPosition(randint(0, scene.screenWidth()), 0)
            Evil_red.setVelocity(randint(-5, 5), 10)
            Evil_red.setBounceOnWall(true)
        } else {
            Evil = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 6 . . . . . . . . 
                . . . . . 6 6 6 6 6 . . . . . . 
                . . . . 6 9 9 6 9 9 6 . . . . . 
                . . . . 6 7 9 6 9 7 6 . . . . . 
                . . . 6 6 7 7 . 7 7 6 6 . . . . 
                . . . 9 7 6 . . . 6 7 9 . . . . 
                . . . 7 6 . . . . . 6 7 . . . . 
                . . . 7 . . . . . . . 7 . . . . 
                . . . 9 7 . . . . . 7 9 . . . . 
                . . . . 9 . . . . . 9 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            Evil.setPosition(randint(0, scene.screenWidth()), 0)
            Evil.setVelocity(randint(-5, 5), 10)
            Evil.setBounceOnWall(true)
        }
    }
})
forever(function () {
    if (sheild_true) {
        shield.setVelocity(Ship.vx, 0)
    }
})
