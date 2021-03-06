import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomInterceptor } from './custom.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true }], // add our custom interceptor to HTTP_INTERCEPTORS
  bootstrap: [AppComponent]
})
export class AppModule { }
