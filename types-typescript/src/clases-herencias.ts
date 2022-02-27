export{};

enum PictureOrientation {
    Landscape,
    Portrait, 
    Square, 
    Panorama, 
}

//SUPER clase

abstract class Item {
    protected readonly _id: number;
    protected _title:string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title
    }
    get id() {
        return this._id;
    }
    // set id(id: number) {
    //     this._id = id
    // }
    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
}

// get & set

class Picture extends Item {
    public static photoOrientation = PictureOrientation;
    // Propiedades
    private _orientation: PictureOrientation

    public constructor(id: number, 
                    title: string, 
                    orientation: PictureOrientation) {
        super(id, title);
                    this._orientation = orientation;

                }
                get orientation() {
                    return this._orientation
                }
                set orientation(orientatio: PictureOrientation) {
                    this._orientation = orientatio;
                }

                //Comportamiento
                public toString() {
                    return `[id: ${this.id},
                            title: ${this.title},
                            orientation: ${this.orientation}]`;
                    }
        
};

class Album extends Item {
    private _pictures: Picture[];

    public constructor(id: number, 
                title: string, 
                pictures: Picture[]) {
                    super(id, title)  //constructor de SUPER clase
                    this._pictures = [];

                }
                get pictures(){
                    return this._pictures
                }
                set pictures(pictures: Picture[]) {
                    this._pictures = pictures
                }

    public addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures', []);
const picture: Picture = new Picture(1, 'Platzi session', PictureOrientation.Square);
album.addPicture(picture);

console.log('album', album)

//Accediendo a los miembros públicos
//picture.id = 100;  //Private
picture.title = 'Another title'; //Private
album.title = 'Personal Activities'; //Private
console.log('album', album)

// const item = new Item(1, 'Test Tilte');
// console.log(item)

//Prueba del miembro estático
console.log('PhotoOrientation', Picture.photoOrientation.Landscape);