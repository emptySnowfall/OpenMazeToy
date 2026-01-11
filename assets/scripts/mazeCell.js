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
export class Cell {
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
