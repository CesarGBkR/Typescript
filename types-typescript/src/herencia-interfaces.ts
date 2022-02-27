export{};

enum PictureOrientation {
    Landscape = 10, //10
    Portrait, 
    Square, 
    Panorama, 
};

interface Entity {
    id: number;
    title: string;
};

interface Album extends Entity {
    //copia de los atributos de entity
    decription: string;
};

interface Picture extends Entity { 
    //copia de los atributos Entity
    orientation: PictureOrientation
};

const album: Album = {
    id: 1,
    title: 'Meetups',
    decription: 'Commuity events around the wold'
};

const picture: Picture = {
    id: 1,
    title: 'Family',
    orientation: PictureOrientation.Landscape
};

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';

console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture)