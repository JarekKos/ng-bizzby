import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  AfterContentChecked
} from '@angular/core';
import { AgmMap, AgmCircle } from '@agm/core';

@Component({
  selector: 'app-g-map',
  templateUrl: './g-map.component.html',
  styleUrls: ['./g-map.component.css'],
})
export class GMapComponent implements OnChanges, AfterContentChecked {

  @Input() range;
  @Input() postCode;

  // get element of StepDirective
  @ViewChild(AgmMap) map: AgmMap;
  @ViewChild(AgmCircle) circle: AgmCircle;

  geocoderInterval = null;
  boundsInterval = null;

  lat = 0;
  lng = 0;
  latLng = null;
  geoCoder = null;
  drawCircle = false;
  triggerResize = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.postCode && this.isPostCodeValid(changes.postCode.currentValue.trim())) {
      this.drawCircle = false;
      this.triggerResize = true;
      this.geocoderInterval = setInterval(() => this.getLatLng(changes.postCode.currentValue.trim()), 50);
    }

    if (changes.range && !changes.range.firstChange) {
      this.circle.getBounds().then((latLng) => this.latLng = latLng);
    }
  }

  ngAfterContentChecked() {
    if (this.triggerResize) {
      this.map.triggerResize().then(() => this.triggerResize = false);
    }
  }

  get rangeInMiles() {
    return this.range * 1609.34; // transform value into miles
  }

  getBounds() {
    if (this.circle) {
      this.circle.getBounds().then((latLng) => {
        this.latLng = latLng;
      });
      clearInterval(this.boundsInterval);
    } else {
      this.map.triggerResize().then(() => {});
    }
  }

  getLatLng(postcode) {
    if (window['google'] && !this.geoCoder) {
      this.geoCoder = new window['google'].maps.Geocoder();
    }

    if (this.geoCoder) {
      this.geoCoder.geocode({ address: postcode }, (result, status) => {
        if (status === 'OK') {
          this.lat = result[0].geometry.location.lat();
          this.lng = result[0].geometry.location.lng();
          this.drawCircle = true;
          this.boundsInterval = setInterval(() => this.getBounds(), 50);
        }
      });

      clearInterval(this.geocoderInterval);
    }
  }

  isPostCodeValid(value) {
    const postCode = value || this.postCode;
    if (!/^[A-Z]{1,2}([0-9]{1,2}|[0-9][A-Z])\s*[0-9][A-Z]{2}$/.test(postCode)) {
      return false;
    }

    return true;
  }

}
