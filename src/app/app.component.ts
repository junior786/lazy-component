import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DynamicService } from './service/dynamic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedComponent = new BehaviorSubject('');
  lazyImports = this.adService.getLazyImports();

  constructor(private adService: DynamicService) {}

}
