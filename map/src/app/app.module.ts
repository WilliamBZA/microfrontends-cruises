import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { MapControlComponent } from './map-control/map-control.component';

@NgModule({
  declarations: [
    AppComponent,
    MapControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MapControlComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(MapControlComponent, { injector: this.injector });
    customElements.define('map-control', el);
  }
}
