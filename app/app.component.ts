import { Component } from "@angular/core";
import { Chart } from "angular-highcharts";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  chart = new Chart({
    chart: {
      type: "line"
    },
    title: {
      text: "Linechart"
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: "Line 1",
        data: [1, 2, 3]
      }
    ]
  });

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 100));
  }
}
