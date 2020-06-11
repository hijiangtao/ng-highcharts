/**
 * @license
 * Copyright hijiangtao. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/ng-highcharts/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from './chart';

@Directive({
  selector: '[chart]'
})
export class ChartDirective implements OnInit, OnDestroy, OnChanges {
  @Input() chart: Chart;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.chart.isFirstChange()) {
      this.destroy();
      this.init();
    }
  }

  ngOnInit() {
    this.init();
  }

  ngOnDestroy() {
    this.destroy();
  }

  private init() {
    if (this.chart instanceof Chart) {
      this.chart.init(this.el);
    }
  }

  private destroy() {
    if (this.chart instanceof Chart) {
      this.chart.destroy();
    }
  }
}
