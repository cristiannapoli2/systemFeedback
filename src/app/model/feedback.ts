export class Feedback{
    id: number;
    tagName:string;
    feedbackType: string;
    sendDate: Date;
    createdAt: Date;
    updateAt: Date;
    enable: Boolean;
    description: string;
    
    constructor(){
        this.id = 0;
        this.tagName='';
        this.feedbackType = '';
        this.sendDate = new Date;
        this.createdAt = new Date;
        this.updateAt = new Date;
        this.enable = new Boolean("");
        this.description = '';
    }

}