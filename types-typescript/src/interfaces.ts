export{};
//Función para mostrar una Fotografía

enum PictureOrientation {
    Landscape = 10, //10
    Portrait, 
    Square, 
    Panorama, 
}

interface Picture {
    title: string;
    date: string;
    orientation: PictureOrientation
}

function showPicture(picture:Picture) {
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

interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PictureOrientation
}

function generatePicture(config: PictureConfig) {
    
    const pic = {title:'Default', date: '2022-03'};

    if(config.title) {
        pic.title = config.title;
    }
    if(config.date) {
        pic.date = config.date
    }
    return pic;
}

let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({title: 'Travel Pic'})
console.log('picture', picture);
picture = generatePicture({title: 'Travel Pic', date: '2022-22'})
console.log('picture', picture);

//Interfaz: Usuario

interface User {
    readonly id: number; //solo lectura
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: 10, username: 'Cesar', isPro: true};
console.log('user', user);
user.username = 'Cesar 2'
console.log('user 2', user)
// user.id = 20 
console.log('user', user) 
