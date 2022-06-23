import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicModule } from './components/dynamic/dynamic.component';
import { DynamicService } from './service/dynamic.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DynamicModule, BrowserAnimationsModule],
  providers: [DynamicService],
  bootstrap: [AppComponent],
})
export class AppModule {}
