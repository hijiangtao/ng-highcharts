# ng-highcharts

[![NPM version](https://img.shields.io/npm/v/ng-highcharts.svg)](https://npmjs.org/package/ng-highcharts)
[![NPM downloads](https://img.shields.io/npm/dt/ng-highcharts.svg)](https://npmjs.org/package/ng-highcharts)
![](https://github.com/cebor/ng-highcharts/workflows/Node.js%20Package/badge.svg)

This is a Highcharts directive for Angular, migrated from `angular-highcharts`, but only import pure highcharts from highcharts.js to reduce final bundle size.
.

**Sync Status**: [0b4c5f](https://github.com/cebor/angular-highcharts/commit/0b4c5fcb417b0c8731c7d8b8f54f40a45a246e60) in 2020.5

## Requirements

```json
{
  "angular": ">=8.0.0",
  "highcharts": ">=7.0.0"
}
```

## Installation

### yarn

```bash
# install ng-highcharts and highcharts
yarn add ng-highcharts highcharts
```

### npm

```bash
# install ng-highcharts and highcharts
npm i --save ng-highcharts highcharts
```

## Usage Example

```typescript
// app.module.ts
import { ChartModule } from 'ng-highcharts';

@NgModule({
  imports: [
    ChartModule // add ChartModule to your imports
  ]
})
export class AppModule {}
```

```typescript
// chart.component.ts
import { Chart } from 'ng-highcharts';

@Component({
  template: `
    <button (click)="add()">Add Point!</button>
    <div [chart]="chart"></div>
  `
})
export class ChartComponent {
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
```

## API Docs

### Chart

The Chart object.

Type: `class`

#### Constructor

```typescript
new Chart(options: Options)
```

#### Properties

```typescript
ref: Highcharts.Chart;
```

Deprecated. Please use `ref$`.

```typescript
ref$: Observeable<Highcharts.Chart>
```

Observeable that emits a Highcharts.Chart - [Offical Chart API Docs](https://api.highcharts.com/class-reference/Highcharts.Chart)

#### Methods

```typescript
addPoint(point: Point, [serieIndex: number = 0]): void
```

Adds a point to a serie

```typescript
removePoint(pointIndex: number, [serieIndex: number = 0], [redraw: boolean = true], [shift: boolean = false]): void
```

Removes a point from a serie

```typescript
addSeries(series: ChartSerie): void
```

Adds a series to the chart

```typescript
removeSeries(seriesIndex: number): void
```

Remove series from the chart

## Using Highcharts modules

To use Highcharts modules you have to import them and provide them in a factory (required for aot).
You can find the list of available modules in the highcharts folder `ls -la node_modules/highcharts/modules`.

**Hint:** Highcharts-more is a exception, you find this module in the root folder.
Don't forget to use the modules with the `.src` suffix, minimized highcharts modules are not importable.

### Example

```typescript
// app.module.ts
import { ChartModule, HIGHCHARTS_MODULES } from 'ng-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';

@NgModule({
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] } // add as factory to your providers
  ]
})
export class AppModule { }
```

Offical Highcharts NPM Docs: http://www.highcharts.com/docs/getting-started/install-from-npm

## Troubleshooting

If you expiring typing errors while you build/serve your angular app the following could be helpful:

```ts
// override options type with <any>
chart = new Chart({ options } as any);
```
This is very useful when using `gauge chart` type.
## Demo

* [Demo](https://hijiangtao.github.io/ng-highcharts)
* [Code](https://github.com/hijiangtao/ng-highcharts/src/app)

## License

MIT © hijiangtao
