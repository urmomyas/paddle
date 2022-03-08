function creat_ball () {
	
}
let ball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 9 a 9 9 9 . . . . . . . 
    . . . 9 9 a 9 9 9 9 . . . . . . 
    . . 9 9 a a a a 9 9 9 . . . . . 
    . . 9 a a 9 9 9 9 a a . . . . . 
    . . 9 9 9 9 9 9 a 9 9 . . . . . 
    . . 9 a a 9 9 9 a a a . . . . . 
    . . a 9 a 9 9 9 9 a 9 . . . . . 
    . . 9 9 9 a a 9 a a 9 . . . . . 
    . . . 9 a a a 9 a 9 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
ball.setVelocity(100, 100)
ball.setBounceOnWall(true)
ball.y = randint(0, 120)
