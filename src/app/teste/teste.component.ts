import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent {
  constructor(private auth: AuthenticationService, private http: HttpClient){}

  llogout(): void {
    console.log(this.auth.currentUserValue)
    this.auth.logout();
  }


}
