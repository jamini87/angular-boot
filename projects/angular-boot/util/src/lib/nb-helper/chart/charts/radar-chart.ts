/**
 * @author Jafar Amini
 */
import {Chart} from '../chart';
import {ChartInterface} from '../chart.interface';
import {ChartType} from '../chart-type.enum';

export class RadarChart extends Chart {
  constructor(init: ChartInterface = {}) {
    super();
    const myChart = new Chart(init);
    myChart.chartType = ChartType.radar;
    return myChart;
  }
}
