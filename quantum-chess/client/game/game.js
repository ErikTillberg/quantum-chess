Template.game.game = function(){
  var game = new Phaser.Game(window.innerWidth-50, window.innerHeight, Phaser.AUTO, 'phaser-example', {preload: preload, create: create});

  function preload(){
    game.load.image('board', 'assets/Chess_board/Chessboard.png');
    game.load.image('pawn', 'assets/Chess_Pieces_golden/Pawn/pawn_new.png');
  }

  function create(){

    game.stage.backgroundColor = "#000000"

    //Draw gameboard
    var board = game.add.sprite(game.world.centerX/2, -50, 'board');
    var width = window.innerWidth;
    var height = window.innerHeight;
    width = width>height?height:width;
    board.width = width;
    board.height = width;
    board.anchor.setTo(0);
    //
    //Draw single chess piece
    var pawn1 = game.add.sprite(0, 0, 'pawn');
    pawn1.inputEnabled = true;
    pawn1.input.enableDrag();

    pawn1.input.enableSnap(56, 56, false, true, 32, 5);
    pawn1.scale.setTo(0.2, 0.2);
    pawn1.x = 250;
    pawn1.y = 10

    console.log(Math.floor(game.world.width), pawn1.width);
    console.log(Math.floor(game.world.height), pawn1.height);

  }

  function update(){
    console.log(game.mousePointer.x, game.mousePointer.y);
  }

  function render(){
    console.log(game.mousePointer.x, game.mousePointer.y);
  }

}
