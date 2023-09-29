export class Role {
  id: number;
  roleName: string;
  createdAt: Date;
  updateAt: Date;
  enable: Boolean;

  constructor() {
    this.id = 0;
    this.roleName = "";
    this.createdAt = new Date();
    this.updateAt = new Date();
    this.enable = new Boolean("");
  }
}
