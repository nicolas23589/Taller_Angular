import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public series: Array<Serie> = [];


  getSeriesList() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });

}

calcularPromedio(){
  let average: number= 0;
  this.series.forEach((serie) => average = average + serie.seasons);
  average= average/this.series.length;
    return average;
}

  constructor(private serieService:SerieService) { }

  

  ngOnInit() {
    this.getSeriesList();
    this.calcularPromedio();
  }

}


