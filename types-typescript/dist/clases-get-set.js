"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 0] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 1] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 2] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 3] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
;
// get & set
class Picture {
    constructor(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientatio) {
        this._orientation = orientatio;
    }
    //Comportamiento
    toString() {
        return `[id: ${this.id},
                            title: ${this.title},
                            orientation: ${this.orientation}]`;
    }
}
;
class Album {
    constructor(id, title, pictures) {
        this._id = id;
        this._title = title;
        this._pictures = [];
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get pictures() {
        return this._pictures;
    }
    set pictures(pictures) {
        this._pictures = pictures;
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, 'Personal Pictures', []);
const picture = new Picture(1, 'Platzi session', PictureOrientation.Square);
album.addPicture(picture);
console.log('album', album);
//Accediendo a los miembros públicos
picture.id = 100; //Private
picture.title = 'Another title'; //Private
album.title = 'Personal Activities'; //Private
console.log('album', album);
