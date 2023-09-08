export class Users{
    id: number;
    username: string;
    password: string;
    email: string;
    name: string;
    surname: string;
    birth_date: string;
    birth_place: string;
    cf: string;
    created_at: Date;
    update_at: Date;
    enable: Boolean;

    constructor(){
        this.id = 0
        this.username = '';
        this.password = '';
        this.email = '';
        this.name = '';
        this.surname = '';
        this.birth_date = '';
        this.birth_place = '';
        this.cf = '';
        this.created_at = new Date;
        this.update_at = new Date;
        this.enable = new Boolean("");
    }
}