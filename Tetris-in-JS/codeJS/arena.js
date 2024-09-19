import GameManager from "./game-manager.js";

export default class Arena {
    constructor (){
        this._columns = GameManager.config.columns;
        this._lines = GameManager.config.lines;
        this._width = this._columns * GameManager.config.squareSize;
        this._height = this._lines * GameManager.config.squareSize;
        this.position = {
            top: (GameManager.config.height - this._height) / 2,
            left: (GameManager.config.width - this._width) / 2
        }

    }

    draw (){
        this._drawBorder()
        //_drawSquares()
        this._drawGrid()
    }
    _drawBorder(){
        GameManager.context.strokeStyle = "#000000";
        GameManager.context.strokeRect(
            this.position.left,
            this.position.top,
            this._width,
            this._height
        );        
    }
    _drawSquares(){}
    _drawGrid(){
        GameManager.context.strokeStyle = "#000000";
    
        for (let row = 0; row <= this._lines; row++) {
            let y = this.position.top + row * GameManager.config.squareSize;
            GameManager.context.beginPath();
            GameManager.context.moveTo(this.position.left, y);
            GameManager.context.lineTo(this.position.left + this._width, y);
            GameManager.context.stroke();
        }
    
        for (let col = 0; col <= this._columns; col++) {
            let x = this.position.left + col * GameManager.config.squareSize;
            GameManager.context.beginPath();
            GameManager.context.moveTo(x, this.position.top);
            GameManager.context.lineTo(x, this.position.top + this._height);
            GameManager.context.stroke();
        }
    }
    

}
