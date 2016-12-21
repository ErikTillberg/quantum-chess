Template.game.game = function(){
  var game = new Phaser.Game(window.innerWidth-50, window.innerHeight, Phaser.AUTO, 'phaser-example', {preload: preload, create: create});

  function preload(){
    game.load.image('board', 'assets/Chess_board/Chessboard.png');
  }

  function create(){
    game.add.sprite(-100, -100,'board');
  }

}
