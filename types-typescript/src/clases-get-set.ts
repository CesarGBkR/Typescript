export{};

enum PictureOrientation {
    Landscape,
    Portrait, 
    Square, 
    Panorama, 
};

// get & set

class Picture {
    // Propiedades
    private _id: number;
    private _title: string;
    private _orientation: PictureOrientation

    public constructor(id: number, 
                    title: string, 
                    orientation: PictureOrientation) {
                    this._id = id;
                    this._title = title;
                    this._orientation = orientation;

                }

                get id() {
                    return this._id;
                }
                set id(id: number) {
                    this._id = id
                }
                get title() {
                    return this._title;
                }
                set title(title: string) {
                    this._title = title;
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

class Album {
    private _id: number
    private _title: string;
    private _pictures: Picture[];

    public constructor(id: number, 
                title: string, 
                pictures: Picture[]) {
                    this._id = id;
                    this._title = title;
                    this._pictures = [];

                }
                get id(){
                    return this._id;
                }
                set id(id: number) {
                    this._id = id
                }
                get title(){
                    return this._title
                }
                set title(title: string){
                    this._title = title
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
picture.id = 100;  //Private
picture.title = 'Another title'; //Private
album.title = 'Personal Activities'; //Private
console.log('album', album)