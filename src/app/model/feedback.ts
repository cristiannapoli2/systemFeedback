export class Feedback{
    id: number;
    tagName!:string;
    feedbackType!: string;
    sendDate!: Date;
    createdAt!: Date;
    updateAt!: Date;
    enable!: Boolean;
    description!: string;
    sentAt!: string;
    sentBy: string;
    teamGroup!: string;
    
    constructor(){
        this.id = 0;
        this.sentBy='';
    
    }
}