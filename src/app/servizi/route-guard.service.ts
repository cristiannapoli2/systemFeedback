import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { loginService } from './login-service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private router:Router,private auth:loginService) { }
  canActivate(): boolean  {
    if(this.auth.isUserLoggedIn()){
  
      return true;
    }else{
      // alert("Accesso negato! Ti rimandiamo al login");
      this.router.navigate([""]);
      return false;
    }
  }
}
