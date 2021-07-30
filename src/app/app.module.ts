import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header__components/header/header.component';
import { HeaderSliderComponent } from './components/header__components/header-slider/header-slider.component';
import { ContractComponent } from './components/body_components/contract/contract.component';
import { NowComponent } from './components/body_components/now/now.component';
import { Item1Component } from './components/body_components/item1/item1.component';
import { Item2Component } from './components/body_components/item2/item2.component';
import { AnalyComponent } from './components/body_components/analy/analy.component';
import { ProtectComponent } from './components/body_components/protect/protect.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSliderComponent,
    ContractComponent,
    NowComponent,
    Item1Component,
    Item2Component,
    AnalyComponent,
    ProtectComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
