/*
	Written by Sophie Skrimblo
	Modified by Sophie Skrimblo
	OPEN SOURCE
*/

// Import MazeMap dependencies
import { Row } from './mazeRow.js';

/*
	'Map' Objects store and perform the core logic of this program
	they store the individual rows, columns, and cells, as well
	as the state of each cell. The Map also accepts a 'Solver' interface
	(i.e., some class which derrives from some base 'Solver' class)
	NOTE: in a grid, the *number of rows* is the height
	AND the "number of columns" is the width
*/
export class  {
	constructor(width, height, solver, mazeTableId) {
		this._width = width;
		this._height = height;
		this._solver = solver;
		this._mazeTableId = mazeTableId;
		this._rows = new Row(this._width, this._height);
	}
	// generateBlankMazeTable fills in the provided HTML table with blank cells
	generateBlankMazeTable() {
		let html = ""
		// build cells in a 2D loop
		for (let i = 0; i < this._height; i += 1) {
			html += "<tr>";
			
			for (let j = 0; j < this._width; j ) {
				let cellId = "row-" + i + "-col-" + j;
				html += "<td id=" + cellId + ">-X-</td>";
			}
			
			html += "</tr>";
		}
		// copy the HTML to the DOM
		document.getElementById(this._mazeTableId).innerHTML = html;
	}
	// generateMaze randmly generates a SOLVEABLE maze and visually updates the maze table
	generateMaze() {
		
	}
	// solveMaze applies the given solver to the maze and visually updates the maze table
	solveMaze() {
		
	}
}
