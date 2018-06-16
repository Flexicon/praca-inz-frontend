import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { SharedModule } from '@app/shared';
import { AppRoutingModule } from '@app/app.routing';
import { AppComponent } from '@app/app.component';
import {
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
} from '@app/scenes';
import { ApiInterceptor } from '@app/shared/interceptors/api.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavbarComponent,
        HomeComponent,
        SearchComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        ScrollToModule.forRoot(),
        SimpleNotificationsModule.forRoot(),
        BrowserAnimationsModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
