import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductListComponent } from './components/product-store/product-list/product-list.component';
import { BannerComponent } from './components/shared/header/banner/banner.component';
import { CardComponent } from './components/shared/header/card/card.component';
import {StyleClassModule} from 'primeng/styleclass';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    BannerComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StyleClassModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
