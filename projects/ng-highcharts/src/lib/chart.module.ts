/**
 * @license
 * Copyright hijiangtao. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/ng-highcharts/blob/master/LICENSE
 */
import { NgModule } from '@angular/core';
import { ChartDirective } from './chart.directive';
import { ChartService, HIGHCHARTS_MODULES } from './chart.service';

@NgModule({
  exports: [ChartDirective],
  declarations: [ChartDirective],
  providers: [
    { provide: HIGHCHARTS_MODULES, useValue: [] },
    ChartService
  ]
})
export class ChartModule {
  constructor(private cs: ChartService) {
    this.cs.initModules();
  }
}
