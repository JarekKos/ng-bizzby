import {
  Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild, AfterViewInit, AfterContentChecked
} from '@angular/core';
import { AgmMap, AgmCircle } from '@agm/core';

@Component({
  selector: 'app-g-map',
  templateUrl: './g-map.component.html',
  styleUrls: ['./g-map.component.css'],
})
export class GMapComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() range;
  @Input() postCode;
  @Input() isActive;

  // get element of StepDirective
  @ViewChild(AgmMap) map: AgmMap;
  @ViewChild(AgmCircle) circle: AgmCircle;

  geocoderInterval = null;
  boundsInterval = null;

  lat = null;
  lng = null;
  latLng = null;
  geoCoder = null;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.range && !changes.range.firstChange) {
      this.circle.getBounds().then((latLng) => this.latLng = latLng);
    }
  }

  get rangeInMiles() {
    return this.range * 1609.34; // transform value into miles
  }

  getBounds() {
    if (this.circle) {
      this.circle.getBounds().then((latLng) => this.latLng = latLng);
      clearInterval(this.boundsInterval);
    }
  }

  getLatLng() {
    if (window['google']) {
      this.geoCoder = new window['google'].maps.Geocoder();

      this.geoCoder.geocode({ address: this.postCode }, (result, status) => {
        if (status === 'OK') {
          this.lat = result[0].geometry.location.lat();
          this.lng = result[0].geometry.location.lng();
          this.boundsInterval = setInterval(() => this.getBounds(), 50);
        }
      });

      clearInterval(this.geocoderInterval);
    }
  }

  ngAfterViewInit() {
    this.geocoderInterval = setInterval(() => this.getLatLng(), 50);
  }

}
