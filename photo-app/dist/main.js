"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const album_1 = require("../src/album");
const picture_1 = require("./picture");
const pictureOrientation_1 = require("../src/pictureOrientation");
const user_1 = require("../src/user");
const user = new user_1.User(1, 'BKR', 'Cesar', true);
const album = new album_1.Album(10, 'Platzi Pictures');
const picture = new picture_1.Picture(1, 'TypeScript Course', '2022-26', pictureOrientation_1.PictureOrientation.Landscape);
//Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
//Borramos Album
user.removeAlbum(album);
console.log('user', user);
