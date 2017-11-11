import {
  Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild, AfterViewInit
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

  lat = null;
  lng = null;
  latLng = null;
  geoCoder = null;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isActive && changes.isActive.firstChange && changes.isActive.currentValue) {
      setTimeout(() => {
        this.circle.getBounds().then((latLng) => this.latLng = latLng);
      });
    }

    if (changes.range && !changes.range.firstChange) {
      this.circle.getBounds().then((latLng) => this.latLng = latLng);
    }

    if ( changes.postCode && !changes.postCode.firstChange) {
      this.geoCoder = new window['google'].maps.Geocoder();

      this.geoCoder.geocode({ address: changes.postCode.currentValue }, (result, status) => {
        if (status === 'OK') {
          this.lat = result[0].geometry.location.lat();
          this.lng = result[0].geometry.location.lng();
          console.log(this.lat, this.lng);
        }
      });
    }

    // if (!changes.range.firstChange) {
    //   this.map.triggerResize(true).then(() => null);
    //   this.circle.getBounds().then((latLng) => this.latLng = latLng);
    //   this.geoCoder = new window['google'].maps.Geocoder()
    //   console.log(this.geoCoder);
    //
    //   this.geoCoder.geocode({ address: '49-100' }, (result, status) => {
    //     if (status === 'OK') {
    //       this.lat = result[0].geometry.location.lat();
    //       this.lng = result[0].geometry.location.lng();
    //     }
    //   });
    // }
  }

  get rangeInMiles() {
    return this.range * 1609.34; // transform value into miles
  }

  ngAfterViewInit() {

  }

}
