import { Component } from '@angular/core';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login/entities/user";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-demo-component',
  //templateUrl: './demo-component.component.html',
  template:`
    <button (click)="signInWithGoogle()">Google</button>
    <button (click)="signInWithFB()">FaceBook</button>
    {{authState | json}}
  `,
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent {

  authState: SocialUser;
  subscription: Subscription;

  constructor(private authService: AuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    console.log(FacebookLoginProvider.PROVIDER_ID);
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    //console.log(this.authService.authState.valueChanges);

    this.subscription = this.authService.authState
    .subscribe(auth => this.authState = auth)
  }

  signOut(): void {
    this.authService.signOut();
  }

}
