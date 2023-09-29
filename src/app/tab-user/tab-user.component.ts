import { Component } from "@angular/core";
import { User } from "../model/user";
import { UserCrudService } from "../servizi/user-crud.service";
import { Role } from "../model/role";

@Component({
  selector: "app-tab-user",
  templateUrl: "./tab-user.component.html",
  styleUrls: ["./tab-user.component.css"],
})
export class TabUserComponent {
  users: User[] = [];
  message!: string;
  token!: string;
  page!: number;
  nPagine!: number;
  role!:Role;
  roles:Role[]=[];

  constructor(private crud: UserCrudService) {}

  ngOnInit(): void {
    this.page = 0;
    this.getUserImp(this.page);
  }

  getUser(): void {
    this.crud.getUsers(this.page).subscribe((users: User[]) => {
      this.users = users;
    });
  }
  getUserImp(page: number): void {
    this.crud.getUsersDim().subscribe((dim: number) => {
      this.nPagine = Math.round(dim / 5);
    });
    if (page < 0) {
      this.page = 0;
    } else if (page > this.nPagine) {
      this.page = this.nPagine;
    } else {
      this.page = page;
    }
    this.crud.getUsers(this.page).subscribe((users: User[]) => {
      this.users = users;
      this.message = "";
    });
    if (this.users.length == 0) {
      this.nPagine = this.nPagine - 1;
    }
  }

  deleteUser(user: User): void {
    let confirmation = confirm("Conferma la cancellazione dell'utente?");
    if (confirmation) {
      this.crud
        .deleteUser(user.id)
        .subscribe((message: string) => {
          this.message = message;
          this.getUserImp(this.page);
        });
    }
  }
}
