export class Account {
    id: number;
    username: string;
    password: string;
    created_at: Date;
    update_at: Date;
    enable: Boolean;
    
  
    constructor() {
      this.id = 0;
      this.username = '';
      this.password = '';
      this.created_at = new Date;
      this.update_at = new Date;
      this.enable = new Boolean("");
    }
  }