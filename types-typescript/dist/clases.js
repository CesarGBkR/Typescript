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
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    ;
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
        this.id = id;
        this.title = title;
        this.pictures = [];
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
picture.id = 100;
picture.title = 'Another title'; //Public
album.title = 'Personal Activities';
console.log('album', album);
