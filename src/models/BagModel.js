import {LibraryItem} from "@/models/LibraryItems";

function BagModel(){
    let arr = [];

    arr.addItem = function(item){
        this.push(
            new LibraryItem(
                item,
            
                ((collection) => function(){

                    collection.removeItem(this)
                })(this) 
            )
        );

      
        return this;
    }


    arr.removeItem = function(item){
        this.splice(this.indexOf(item), 1);

        
        return this;
    }

    arr.clear= function(){
        this.arr =[];

        return this;
    }

    return arr;
}

export default BagModel;