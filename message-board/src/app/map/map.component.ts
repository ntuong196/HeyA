/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />
import { Component, ViewChild } from '@angular/core'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
	@ViewChild('gmap') gmapElement:any
	map: google.maps.Map
	private isTracking = false;
	currentLat: any;
	currentLong: any;

}
