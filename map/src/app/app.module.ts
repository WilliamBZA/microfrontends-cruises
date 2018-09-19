/// <reference path="../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { MapControlComponent } from './map-control/map-control.component';

import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, WindowRef, DocumentRef } from 'angular-maps';

@NgModule({
  declarations: [
    AppComponent,
    MapControlComponent
  ],
  imports: [
    BrowserModule,
    MapModule.forRoot()
  ],
  providers: [{ provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory }],
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

export function MapServiceProviderFactory(){
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey ="AkO1rARMw-tWnH2pu_4ujk58o8KOmfscCaavb5OJngpLVrgNj3DVZZjLFyJxu4DZ"; // your bing map key
  bc.branch = "experimental"; 
      // to use the experimental bing brach. There are some bug fixes for
      // clustering in that branch you will need if you want to use 
      // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}