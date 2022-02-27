"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
;
;
;
;
const album = {
    id: 1,
    title: 'Meetups',
    decription: 'Commuity events around the wold'
};
const picture = {
    id: 1,
    title: 'Family',
    orientation: PictureOrientation.Landscape
};
let newPicture = {};
newPicture.id = 2;
newPicture.title = 'Moon';
console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);
