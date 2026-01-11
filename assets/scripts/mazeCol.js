/*
	Written by Sophie Skrimblo
	Modified by Sophie Skrimblo
	OPEN SOURCE
*/

// Import Column dependencies
import { Cell } from './mazeCell.js';
// constraints for the reasonable size range of a maze map
const MIN_WIDTH = 6;
const MAX_WIDTH = 24;

/*
	'Column' Objects store a fixed number of "Cell" objects
	NOTE: in a grid, the *number of columns* is the width
*/
export class Column {
	constructor(width) {
		// clamp provided values within the established boundaries - always sanitize input!
		this._width = Math.clamp(width, MIN_WIDTH, MAX_WIDTH);
		this._cells = [];
	
		// generate a list of blank Cells to fit the required width
		for (let currCellNum = 0; currCellNum < this._width; currCellNum += 1) {
			this._cells.push(new Cell());
		}
	}
}
