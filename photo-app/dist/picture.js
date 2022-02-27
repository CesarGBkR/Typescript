"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
const items_1 = require("../src/items");
class Picture extends items_1.Item {
    constructor(id, title, _date, _orientation) {
        super(id, title);
        this._date = _date;
        this._orientation = _orientation;
    }
    toString() {
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this._orientation}]`;
    }
}
exports.Picture = Picture;
