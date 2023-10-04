import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../model/user";
import { UserCrudService } from "../servizi/user-crud.service";
import { Role } from "../model/role";
import { TokenJWT } from "../model/TokenJWT";

@Component({
  selector: "app-form-user",
  templateUrl: "./form-user.component.html",
  styleUrls: ["./form-user.component.css"],
})
export class FormUserComponent implements OnInit {
  message!: string;
  user: User = new User();
  users: User[] = [];
  idUser!: number;
  role!: Role;
  roles: Role[] = [];
  

  constructor(
    private crudUser: UserCrudService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.idUser = this.activatedRoute.snapshot.params["id"];
    this.crudUser.getUser(this.idUser).subscribe((user: User) => {
      this.user = user;
      
    });
    this.crudUser.getRoles().subscribe((roles: Role[]) => {
      this.roles = roles;
    });
  }
  insertUser(user: User): void {
    this.crudUser.addUser(user).subscribe((message: string) => {
      this.message = message;
    });
  }

  getUser(id: number): any {
    this.crudUser.getUser(id).subscribe((user: User) => {
      this.user = user;
    });
  }

  onSearch(): void {
    this.user = this.getUser(this.user.id);
  }

  resetMessage(): void {
    this.message = "";
  }

  onSubmit(): void {
    if (this.users.length == null) {
      this.crudUser.addUser(this.user).subscribe((message: string) => {
        this.message = message;
        this.router.navigate(["tabellaUser"]);
      });
      this.user = new User();
    } else {
      this.crudUser.addUser(this.user).subscribe((message: string) => {
        this.message = message;
        this.router.navigate(["tabellaUser"]);
      });
      this.user = new User();
    }
  }
}
