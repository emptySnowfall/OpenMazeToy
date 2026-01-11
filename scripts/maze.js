/*
	Written by Sophie Skrimblo
	Modified by Sophie Skrimblo
	OPEN SOURCE
*/

/*
	'Cell' Objects store all information needed to:
	- generate a map
	- display the map
	- run a solver against the map and display the path taken
	
	By default, a "Cell" object generates with all walls solid and without being marked "visited" or "active"
*/
class Cell {
	constructor() {
		this._northWall = true;
		this._eastWall = true;
		this._southWall = true;
		this._westWall = true;
		this._visited = false;
		this._activeSpot = false;
	}
}

/*
	'Column' Objects store a fixed number of "Cell" objects
	NOTE: in a grid, the *number of columns* is the width
*/
class Column {
	constructor(width) {
		this._cells = [];
	
		// generate a list of blank Cells to fit the required width
		for (let currCellNum = 0; currCellNum < width; currCellNum++) {
			this._cells.push(new Cell());
		}
	}
}

/*
	'Row' objects store a fixed number of "Column" objects, 
	each of which contain a fixed number of "Cell" objects
	NOTE: in a grid, the *number of rows* is the height
*/
class Row {
	constructor(width, height) {
		this._columns = [];
		
		// generate a list of columns to fit the required height
		for (let currColNum = 0; currColNum < height; currColNum++) {
			this._columns.push(new Column(width));
		}
	}
}

/*
	'Map' Objects store and perform the core logic of this program
	they store the individual rows, columns, and cells, as well
	as the state of each cell. The Map also accepts a 'Solver' interface
	(i.e., some class which derrives from some base 'Solver' class)
	NOTE: in a grid, the *number of rows* is the height
	AND the "number of columns" is the width
*/
class MazeMap {
	constructor(width, height, solver) {
		this._solver = solver;
		this._rows = new Row(width, height);
	}
}

let test_map = new MazeMap(7, 3, "NO SOLVER YET IMPLEMENTED");
console.log(test_map);