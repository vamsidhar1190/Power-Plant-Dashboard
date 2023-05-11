import { Component, OnInit, ViewChild } from '@angular/core';
import { TableService } from '../services/table.service';
import { Powerplant } from '../interfaces/powerplant'
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexXAxis,
  ApexResponsive
} from "ng-apexcharts";
import { TreeNode } from 'primeng/api';

import {

  ApexYAxis,
  ApexAnnotations,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions6 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: any; //ApexXAxis;
  annotations: ApexAnnotations;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
};


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};


export type ChartOptions2 = {
  series2: ApexAxisChartSeries;
  chart2: ApexChart;
  dataLabels2: ApexDataLabels;
  plotOptions2: ApexPlotOptions;
  xaxis2: ApexXAxis;
};

export type ChartOptions3 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  totalCapacity: number = 0;
  totalCapacityRange: number = 634000;

  productionEfficency: number = 0;
  productionEfficencyRange: number = 98

  // @ViewChild("chart") chart!: ChartComponent;
  constructor(private tableserviceref: TableService) { }



  public chartOptions: any;

  public chartOptions2: any;

  public chartOptions3: any;

  public chartOptions4: any;

  public chartOptions5: any;

  public chartOptions6: any

  public dashboardDate:Date=new Date()


  data: any;

  options: any;

  basicData: any;

  basicOptions: any;

  files!: TreeNode[];

  cols!: any[];
  products: Powerplant[] = []

  ngOnInit() {
    this.efficiencychart();
    this.systemfrequency();
    this.barchart();
    this.plantdetails();
    this.ambienttemp();
    this.RelativeHum();
    this.pieechart();
    this.tabledata();
    this.counter();
    this.effiTurbine()

  }

  counter() {
    const interval = setInterval(() => {
      this.totalCapacity += 1000;
      if (this.totalCapacity >= this.totalCapacityRange) {
        clearInterval(interval);
      }
    }, 0.1);
    const interval2 = setInterval(() => {
      this.productionEfficency += 1;
      if (this.productionEfficency >= this.productionEfficencyRange) {
        clearInterval(interval2);
      }
    }, 50);
  }

  tabledata() {
    this.tableserviceref.onPowerplantData().subscribe((data) => {
      this.products = data
    })
  }


  efficiencychart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: ['Axial Flow Turbine', 'Impluse Turbine', 'Raidal Flow Turbine', 'REaction Turbine'],
      datasets: [
        {
          label: 'Avg.Efficiency',
          data: [50, 89.41, 95.53, 90.50],
          backgroundColor: ['rgb(101, 67, 181)'],
          borderWidth: 1
        }
      ]
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }

  systemfrequency() {
    this.chartOptions = {
      series: [76],
      chart: {
        type: "radialBar",
        offsetY: -20
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: -2,
              fontSize: "22px"
            }
          }
        }
      },
      fill: {
        colors:['#6a5acd'],
        type: "gradient",
       
      },
      labels: ["Average Results"]
    };
  }

  ambienttemp() {
    this.chartOptions4 = {
      series: [74],
      chart: {
        type: "radialBar",
        offsetY: -20
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: -2,
              fontSize: "22px"
            }
          }
        }
      },
      fill: {
        colors:['#FF6347'],
        type: "gradient",
      
      },
      labels: [""]
    };

  }
  RelativeHum() {
    this.chartOptions5 = {
      series: [70],
      chart: {
        type: "radialBar",
        offsetY: -20
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: -2,
              fontSize: "22px"
            }
          }
        }
      },
      fill: {
        colors:['#3cb371'],
        type: "gradient",
     
      },
      labels: ["Average Results"]
    };
  }

  barchart() {
    this.chartOptions2 = {
      series: [
        {
          name: "ROI",
          data: [16.36, 21.38, 25.08, 25.70, 26.91,]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "FairFalcon",
          "Janlea",
          "Glassholt",
          "Springbarrow",
          "Fairfalcon",

        ]
      }
    };
  }

  plantdetails() {
    this.files = [];
    for (let i = 0; i < 50; i++) {
      let node = {
        data: {
          location: 'Item ' + i,
          Turbine: Math.floor(Math.random() * 1000) + 1 + 'kb',
          Capacity: 'Type ' + i,
          Exceptedoutput: 'Type ' + i,
          Actualoutput: 'Type ' + i,
          Status: " type" + i,
          Production: "type" + i,
          CapacityUti: Math.floor(Math.random() * 100) + 1
        },
      };

      this.files.push(node);
    }

    this.cols = [
      { field: 'location', header: 'Location' },
      { field: 'Turbine', header: 'Turbine Type' },
      { field: 'Capacity', header: 'Capacity' },
      { field: 'Exceptedoutput', header: 'Excepted OutPut' },
      { field: 'Actualoutput', header: 'Actual OutPut' },
      { field: 'Status', header: 'Status' },
      { field: 'Production', header: 'Production Rate' },
      { field: 'CapacityUti', header: 'C Utilization' }
    ];
  }

  pieechart() {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Scheduled Maintance', 'Perfect Condition', 'Complete Breakdown'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }

  effiTurbine() {
    this.chartOptions6 = {
      series: [
        {
          name: "Avg.Efficiency",
          data: [92.00, 50.41, 60.53, 70.50,]
        }
      ],
      annotations: {
        points: [
          {
            x: "Bananas",
            seriesIndex: 0,
            label: {
              borderColor: "red",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "Bananas are good"
            }
          }
        ]
      },
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"]
        }
      },
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: [
          "Axial Flow Turbine",
          "Impulse Turbine",
          "Radial Flow Turbine",
          "Reaction Turbine",

        ],
        tickPlacement: "on"
      },

      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        }
      }
    };
  }
}
















