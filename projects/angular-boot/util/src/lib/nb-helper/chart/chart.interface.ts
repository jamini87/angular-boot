/**
 * @author Jafar Amini
 */
import {ChartType} from './chart-type.enum';

export interface ChartInterface {
  label?: string;
  labels?: string[];
  data?: number[];
  colors?: Array<ChartColor>;
  chartType?: ChartType;
  legend?: boolean;
  options?: {
    scaleShowVerticalLines?: boolean,
    responsive?: boolean,
    legend?: {
      labels?: {
        // This more specific font property overrides the global property
        fontColor?: string,
        fontFamily?: string
      }
    },
    scales?: {
      yAxes?: [{
        ticks?: {
          beginAtZero?: boolean
        }
      }]
    }
  };
}

export interface ChartColor {
  backgroundColor?: string;
  borderColor?: string;
  pointBackgroundColor?: string;
  pointBorderColor?: string;
  pointHoverBackgroundColor?: string;
  pointHoverBorderColor?: string;
}
