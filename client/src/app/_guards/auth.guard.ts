import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private toastr:ToastrService){}
  retValue = new Observable<boolean>();
  canActivate():Observable<boolean>{
    // @ts-ignore
    return this.accountService.currentUser$.pipe(
      // @ts-ignore
      map(user=>{
      if(user) return true;
      this.toastr.error('You cannot activate route!')
    })
    )
  }



}
