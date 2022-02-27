import { Album } from "./album";
import { Picture } from "./picture";
import { PictureOrientation } from "./pictureOrientation";
import { User } from "./user";

const user = new User(1, 'BKR', 'Cesar', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(1, 'TypeScript Course', '2022-26', PictureOrientation.Landscape);

//Creamos relaciones

user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);

//Borramos Album
user.removeAlbum(album);
console.log('user', user)