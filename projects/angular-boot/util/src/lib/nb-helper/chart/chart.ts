/**
 * @author Jafar Amini
 */
import ChartDefault from './chart-default';
import {ChartColor, ChartInterface} from './chart.interface';
import {ChartType} from './chart-type.enum';
import {isNullOrUndefined} from '../../nb-util';

export class Chart implements ChartInterface {
  label: string;
  labels: string[];
  data: number[];
  colors: Array<ChartColor>;
  chartType: ChartType;
  legend: boolean;
  options: any = {
    scaleShowVerticalLines: null,
    responsive: null,
    legend: {
      labels: {
        // This more specific font property overrides the global property
        fontColor: null,
        fontFamily: null
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: null
        }
      }]
    }
  };


  constructor(init: ChartInterface = {}) {
    this.label = init.label || ChartDefault.label;
    this.labels = init.labels || ChartDefault.labels;
    this.data = init.data || ChartDefault.data;
    this.colors = init.colors || ChartDefault.colors;
    this.chartType = init.chartType || ChartDefault.chartType;
    this.legend = init.legend || ChartDefault.legend;
    if (isNullOrUndefined(init.options)) {
      this.options = ChartDefault.options;
    } else {
      this.options.scaleShowVerticalLines = init.options.scaleShowVerticalLines || ChartDefault.options.scaleShowVerticalLines;
      if (isNullOrUndefined(init.options.legend)) {
        this.options.legend = ChartDefault.options.legend;
      } else {
        if (isNullOrUndefined(init.options.legend.labels)) {
          this.options.legend.labels = ChartDefault.options.legend.labels;
        } else {
          this.options.legend.labels.fontColor =
            init.options.legend.labels.fontColor || ChartDefault.options.legend.labels.fontColor;
          this.options.legend.labels.fontFamily =
            init.options.legend.labels.fontFamily || ChartDefault.options.legend.labels.fontFamily;
        }

      }

      if (isNullOrUndefined(init.options.scales)) {
        this.options.scales = ChartDefault.options.scales;
      } else {
        this.options.scales.yAxes = ChartDefault.options.scales.yAxes;
      }
    }
  }

  static quickCreate(options: { beginAtZero?: boolean, fontColor?: string, fontFamily?: string } = {}): Chart {
    const chart = new Chart();
    if (!isNullOrUndefined(options.beginAtZero)) {
      chart.options.scales.yAxes = [{ticks: {beginAtZero: options.beginAtZero}}];
    }
    if (!isNullOrUndefined(options.fontColor)) {
      chart.options.legend.labels.fontColor = options.fontColor;
    }
    if (!isNullOrUndefined(options.fontFamily)) {
      chart.options.legend.labels.fontFamily = options.fontFamily;
    }
    return chart;
  }

}
