export class Recipe{
    public name: string;
    public descripiton: string;
    public imagePath:string;

    constructor(name:string, desc:string, imagePath:string){
        this.name = name;
        this.descripiton = desc;
        this.imagePath = imagePath;
    }
}