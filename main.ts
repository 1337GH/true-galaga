namespace SpriteKind {
    export const shield = SpriteKind.create()
    export const shooter = SpriteKind.create()
    export const Good = SpriteKind.create()
    export const Bad = SpriteKind.create()
    export const DeadZone = SpriteKind.create()
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
    info.changeScoreBy(3)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.shield)
    sheild_true = true
    defense()
    laser = false
})
sprites.onOverlap(SpriteKind.DeadZone, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 500)
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    laser = true
    attack()
    if (sheild_true) {
        shield.destroy()
        sheild_true = false
    }
})
sprites.onOverlap(SpriteKind.DeadZone, SpriteKind.shooter, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 500)
    info.changeLifeBy(-1)
})
function SpawnEnem () {
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
function attack () {
    if (laser) {
        projectile3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . . . . 2 1 1 1 2 . . . . . . 
            . . . . . 2 1 1 1 2 . . . . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . . . . . 3 2 3 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
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
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Bad, SpriteKind.shield, function (sprite, otherSprite) {
    sprite.destroy(effects.fountain, 100)
    info.changeScoreBy(5)
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
function SpawnShooter () {
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
}
sprites.onOverlap(SpriteKind.Good, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    sprite.destroy()
    info.changeScoreBy(1)
})
let Evil_red: Sprite = null
let projectile3: Sprite = null
let Evil: Sprite = null
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
Ship.setStayInScreen(true)
controller.moveSprite(Ship, 75, 0)
SpawnShooter()
let mySprite = sprites.create(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `, SpriteKind.DeadZone)
mySprite.setPosition(80, 120)
info.setLife(3)
info.setScore(0)
game.onUpdate(function () {
    while (info.score() >= 151) {
        game.over(true)
    }
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
            SpawnShooter()
        } else {
            SpawnEnem()
        }
    }
})
forever(function () {
    if (sheild_true) {
        shield.setVelocity(Ship.vx, 0)
    }
})
