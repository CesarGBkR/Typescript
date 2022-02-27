import { Item } from "../src/items";
import { PictureOrientation } from "../src/pictureOrientation";

export class Picture extends Item {
	public constructor(id: number, 
                    title: string, 
                    private _date: string, 
                    private _orientation: PictureOrientation) {
		super(id, title);
	}
	public toString() {
		return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this._orientation}]`;
	}
}