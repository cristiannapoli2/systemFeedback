export class Tag{
    id: number;
    tagName: string;
    description: string;
    createdAt: Date;
    updateAt: Date;
    enable: Boolean;

    constructor(){
        this.id = 0;
        this.tagName = '';
        this.description = '';
        this.createdAt = new Date;
        this.updateAt = new Date;
        this.enable = new Boolean("")
    }
}