function LibraryItem(media, removeMethod){
    // list of possible values (enum)
    const STATUSES = {INLIBRARY: 'in', OUTLIBRARY: 'out'};

    // unique id for each library item
    media.id = Math.floor(Math.random() * 10e16);

    // decorate existing objects with LI functionality
    media.status = STATUSES.INLIBRARY;


    media.return= function(){
        this.status = STATUSES.INLIBRARY;
    }

    media.checkOut = function(){
        this.status = STATUSES.OUTLIBRARY;
    }

    media.isAvailable = function(){
        return this.status === STATUSES.INLIBRARY;
    }

    // option 1
    // media.remove = function(){
    //     removeMethod(this); // this is the library item (book / movie)
    // }

    // option 2
    //media.remove = removeMethod || (() => {})
    media.remove = removeMethod || function(){};


    return media;
}

function Book(title, genre, pages){
    this.title = title || 'Default Title';
    this.genre = genre || '';
    this.pages = pages;
}

class Movie {
    constructor(title, genre, runningTime) {
        this.title = title || 'Default Title';
        this.genre = genre || '';
        this.runningTime = runningTime;
    }
}
function Album (title, artist, trackCount){
    this.title = title || 'Default Title';
    this.artist = artist|| '';
    this.trackCount = trackCount;
}

export {LibraryItem, Book, Movie,Album};