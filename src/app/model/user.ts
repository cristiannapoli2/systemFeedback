export class User{
    id: number;
    username: string;
    password: string;
    email: string;
    name: string;
    surname: string;
    birthDate: string;
    birthPlace: string;
    cf: string;
    roleName:string;
    createdAt: Date;
    updateAt: Date;
    enable: Boolean;

    constructor(){
        this.id = 0
        this.username = '';
        this.password = '';
        this.email = '';
        this.name = '';
        this.surname = '';
        this.birthDate = '';
        this.birthPlace = '';
        this.cf = '';
        this.roleName='';
        this.createdAt = new Date;
        this.updateAt = new Date;
        this.enable = new Boolean("");
    }
}