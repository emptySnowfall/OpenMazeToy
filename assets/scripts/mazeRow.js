/*
	Written by Sophie Skrimblo
	Modified by Sophie Skrimblo
	OPEN SOURCE
*/

// Import Row dependencies
import { Column } from './mazeCol.js';
// constraints for the reasonable size range of a maze map
const MIN_HEIGHT = 6;
const MAX_HEIGHT = 24;

/*
	'Row' objects store a fixed number of "Column" objects, 
	each of which contain a fixed number of "Cell" objects
	NOTE: in a grid, the *number of rows* is the height
*/
export class Row {
	constructor(width, height) {
		// clamp provided values within the established boundaries - always sanitize input!
		this._height = Math.clamp(width, MIN_HEIGHT, MAX_HEIGHT)
		this._columns = [];
		
		// generate a list of columns to fit the required height
		for (let currColNum = 0; currColNum < this._height; currColNum += 1) {
			this._columns.push(new Column(width));
		}
	}
}
