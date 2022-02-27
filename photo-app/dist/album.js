"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
const items_1 = require("../src/items");
class Album extends items_1.Item {
    constructor(id, title) {
        super(id, title);
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
exports.Album = Album;
