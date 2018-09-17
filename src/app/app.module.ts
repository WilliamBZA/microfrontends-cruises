/// <reference path="../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, WindowRef, DocumentRef } from 'angular-maps';

@NgModule({
  imports: [BrowserModule, MapModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory }]
})
export class AppModule {
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