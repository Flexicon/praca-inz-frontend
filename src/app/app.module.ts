import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@app/shared';
import { AppRoutingModule } from '@app/app.routing';
import { AppComponent } from '@app/app.component';
import {
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    SearchResultsComponent,
} from '@app/scenes';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavbarComponent,
        HomeComponent,
        SearchComponent,
        SearchResultsComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
