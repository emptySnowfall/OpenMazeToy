/*
	Written by Sophie Skrimblo
	Modified by Sophie Skrimblo
	OPEN SOURCE
*/

// constraints for the reasonable size range of a maze map
const MIN_WIDTH = 6;
const MAX_WIDTH = 24;
const MIN_HEIGHT = 6;
const MAX_HEIGHT = 24;

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
		this._activeSpot = false;
		this._visited = false;
	}
	// getters and setters for North wall state
	getNorthWallState() {
		return this._northWall;
	}
	setNorthWallState(newState) {
		this._northWall = newState;
	}
	// getters and setters for East wall state
	getEastWallState() {
		return this._eastWall;
	}
	setEastWallState(newState) {
		this._eastWall = newState;
	}
	// getters and setters for South wall state
	getSouthWallState() {
		return this._southWall;
	}
	setSouthWallState(newState) {
		this._southWall = newState;
	}
	// getters and setters for West wall state
	getWestWallState() {
		return this._westWall;
	}
	setWestWallState(newState) {
		this._westWall = newState;
	}
	// getters and setters for Active wall state
	isActive() {
		return this._activeSpot;
	}
	setIsActive(newState) {
		this._activeSpot = newState;
		if (newState === true) { // an active tile has necessarily been visited
			this._visited = true;
		}
	}
	// getters and setters for Visited wall state
	isVisited() {
		return this._visited;
	}
	setIsVisited(newState) {
		this._visited = newState;
	}
}

/*
	'Column' Objects store a fixed number of "Cell" objects
	NOTE: in a grid, the *number of columns* is the width
*/
class Column {
	constructor(width) {
		// clamp provided values within the established boundaries - always sanitize input!
		this._width = Math.clamp(width, MIN_WIDTH, MAX_WIDTH);
		this._cells = [];
	
		// generate a list of blank Cells to fit the required width
		for (let currCellNum = 0; currCellNum < this._width; currCellNum++) {
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
		// clamp provided values within the established boundaries - always sanitize input!
		this._height = Math.clamp(width, MIN_HEIGHT, MAX_HEIGHT)
		this._columns = [];
		
		// generate a list of columns to fit the required height
		for (let currColNum = 0; currColNum < this._height; currColNum++) {
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
	constructor(width, height, solver, mazeTableId) {
		this._solver = solver;
		this._mazeTableId = mazeTableId;
		this._rows = new Row(width, height);
	}
}