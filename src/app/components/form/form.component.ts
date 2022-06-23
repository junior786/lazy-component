import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormDefaultComponent implements OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    console.log('Destriu');

  }

}

@NgModule({
  imports: [CommonModule, MatInputModule],
  exports: [FormDefaultComponent],
  declarations: [FormDefaultComponent],
})
export class FormComponentModule {
  constructor() {
    console.log('module lazy loaded: ', this);
  }
}
