import { Injectable } from '@angular/core';
import { LazyImport, LazyImports } from '../components/dynamic/model/lazy.model';

@Injectable()
export class DynamicService implements LazyImports {

  getLazyImports() {
    return [
      new LazyImport('table', import('../components/table/table.component'), '1'),
      new LazyImport('images', import('../components/images-show/images-show.component'), '2'),
      new LazyImport('form', import('../components/form/form.component'), '3'),
    ];
  }
}
