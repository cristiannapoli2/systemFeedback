export class TokenJWT{
    password: string;
    surname: string;
    name: string;
    email:string;
    expDate:Date;
    username!:string;
    role!:string;
    
    constructor() {
        this.name = '';
        this.username = '';
        this.password = '';
        this.email= '';
        this.expDate = new Date;
        this.surname= '';
        this.role='';
      }
}