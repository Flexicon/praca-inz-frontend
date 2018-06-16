import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { SharedModule } from '@app/shared';
import { AppRoutingModule } from '@app/app.routing';
import { AppComponent } from '@app/app.component';
import {
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
} from '@app/scenes';

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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
