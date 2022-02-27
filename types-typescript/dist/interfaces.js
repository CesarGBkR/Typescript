"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Función para mostrar una Fotografía
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
function showPicture(picture) {
    // title: string, 
    // date: string, 
    // orientation: PictureOrientation}) {
    console.log(`[title: ${picture.title}, 
                date:${picture.date}, 
                orientatio: ${picture.orientation}]`);
}
let myPic = {
    title: 'Test Tiltle',
    date: '2022-26',
    orientation: PictureOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Test Title',
    date: '2022-26',
    orientation: PictureOrientation.Portrait
});
function generatePicture(config) {
    const pic = { title: 'Default', date: '2022-03' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic' });
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic', date: '2022-22' });
console.log('picture', picture);
let user;
user = { id: 10, username: 'Cesar', isPro: true };
console.log('user', user);
user.username = 'Cesar 2';
console.log('user 2', user);
// user.id = 20 
console.log('user', user);
