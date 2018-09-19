import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-map-control',
  templateUrl: './map-control.component.html',
  styleUrls: ['./map-control.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class MapControlComponent implements OnInit {

  public huzzaa : string = 'Meow';

  constructor() { }

  ngOnInit() {
  }

}
