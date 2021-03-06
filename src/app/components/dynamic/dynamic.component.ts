import {
  Component,
  createNgModuleRef,
  Injector,
  Input,
  NgModule,
  OnChanges,
  SimpleChanges,
  Type,
  ViewChild,
} from '@angular/core';

import { DynamicDirective } from 'src/app/directive/dynamic.directive';
import { LazyImport } from './model/lazy.model';

interface AdComponent {
  data: any;
  inputData: any;
}

@Component({
  selector: 'app-dynamic',
  template: `<ng-template appDynamicHost></ng-template>`,
})
export class DynamicComponent implements OnChanges {
  @Input() lazyImports = new Array<LazyImport>();
  @Input() id!: string  | any ;
  @Input() inputData: any;
  @ViewChild(DynamicDirective, { static: true }) dynamicHost!: DynamicDirective;

  constructor(private injector: Injector) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) this.loadComponent();
  }

  ngOnInit(): void {}


  async loadComponent(): Promise<void> {
    const dynamicImport = this.lazyImports.find(
      (lazyImport) =>
        lazyImport.id.toLocaleLowerCase() === this.id?.toLocaleLowerCase()
    );
    const viewContainerRef = this.dynamicHost.viewContainerRef;

    viewContainerRef.clear();

    if (dynamicImport) {
      await dynamicImport.src.then((res) => {
        const ref = this.buildRef(res);
        console.log(ref)
        const componentRef = viewContainerRef.createComponent<AdComponent>(
          ref?.component,
          {
            ngModuleRef: createNgModuleRef(ref?.module, this.injector),
          }
        );
        componentRef.instance.data = dynamicImport.data;
        componentRef.instance.inputData = this.inputData;
      });
    }
  }

  buildRef(res: LazyImport): any {
    return Object.entries(res).reduce(
      (prev, [key, value]) => {
        if (key.includes('Component')) prev.component = value;
        if (key.includes('Module')) prev.module = value;
        return prev;
      },
      { component: null, module: null }
    );
  }

}

@NgModule({
  declarations: [DynamicComponent, DynamicDirective],
  exports: [DynamicComponent]
})
export class DynamicModule {

  constructor(){

  }
}
