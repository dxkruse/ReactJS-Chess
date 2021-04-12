import { PieceType, TeamType, Piece } from "../Chessboard/Chessboard";

export default class Referee {

	tileIsOccupied(x:number, y:number, boardState: Piece[]): boolean {
		console.log("checking if tile is occupied");

		const piece = boardState.find(p => p.x === x && p.y === y)
		if (piece) {
			return true;
		} else {
			return false;
		}
	}

	isValidMove(x0: number, y0: number, x1: number, y1: number,
    type: PieceType, team: TeamType, boardState: Piece[]) {

		console.log("ref is checking move");
		console.log(`previous location: ${x0}, ${y0}`);
		console.log(`current location: ${x1}, ${y1}`);
		console.log(`piece type: ${type}`);
		console.log(`team: ${team}`);
    
		if(type === PieceType.PAWN) {
			if(team === TeamType.PLAYER) {
				if(y0 === 1) {
					if(x0 === x1 && (y1 - y0 === 1 || y1 - y0 === 2)) {
						if (!this.tileIsOccupied(x1, y1, boardState)) {
							return true;
						}
					} 
				} else if (x0 === x1 && y1 - y0 === 1) {
					if (!this.tileIsOccupied(x1, y1, boardState)) {
						return true;
					}
				}
			} else {
				if(y0 === 6) {
					if(x0 === x1 && (y1 - y0 === -1 || y1 - y0 === -2)) {
						if (!this.tileIsOccupied(x1, y1, boardState)) {
							return true;
						}
					}
				} else if (x0 === x1 && y1 - y0 === -1) {
					if (!this.tileIsOccupied(x1, y1, boardState)) {
						return true;
					}
				}
			}
		}
	}
}