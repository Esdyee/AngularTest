import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

import { DemoComponentComponent } from './demo-component/demo-component.component'
import { AppComponent } from './app.component';

export function provideConfig() {
  return config;
}

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("378269639280699")
  }
]);


@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule.initialize(config)
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
