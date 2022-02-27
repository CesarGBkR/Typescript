"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 0] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 1] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 2] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 3] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
//SUPER clase
var Item = /** @class */ (function () {
    function Item(id, title) {
        this._id = id;
        this._title = title;
    }
    Object.defineProperty(Item.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "title", {
        // set id(id: number) {
        //     this._id = id
        // }
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
// get & set
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(id, title, orientation) {
        var _this = _super.call(this, id, title) || this;
        _this._orientation = orientation;
        return _this;
    }
    Object.defineProperty(Picture.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (orientatio) {
            this._orientation = orientatio;
        },
        enumerable: false,
        configurable: true
    });
    //Comportamiento
    Picture.prototype.toString = function () {
        return "[id: ".concat(this.id, ",\n                            title: ").concat(this.title, ",\n                            orientation: ").concat(this.orientation, "]");
    };
    Picture.photoOrientation = PictureOrientation;
    return Picture;
}(Item));
;
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    function Album(id, title, pictures) {
        var _this = _super.call(this, id, title) //constructor de SUPER clase
         || this;
        _this._pictures = [];
        return _this;
    }
    Object.defineProperty(Album.prototype, "pictures", {
        get: function () {
            return this._pictures;
        },
        set: function (pictures) {
            this._pictures = pictures;
        },
        enumerable: false,
        configurable: true
    });
    Album.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}(Item));
var album = new Album(1, 'Personal Pictures', []);
var picture = new Picture(1, 'Platzi session', PictureOrientation.Square);
album.addPicture(picture);
console.log('album', album);
//Accediendo a los miembros públicos
//picture.id = 100;  //Private
picture.title = 'Another title'; //Private
album.title = 'Personal Activities'; //Private
console.log('album', album);
// const item = new Item(1, 'Test Tilte');
// console.log(item)
//Prueba del miembro estático
console.log('PhotoOrientation', Picture.photoOrientation.Landscape);
