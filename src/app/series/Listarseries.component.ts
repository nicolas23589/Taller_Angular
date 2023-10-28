import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SerieService } from './serie.service';


@Component({
  selector: 'app-series',
  templateUrl: './ListarSeries.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public series: Array<Serie> = [];
  public serieSeleccionada: Serie | undefined;


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

onSerieClick(serie: Serie) {
  this.serieSeleccionada = serie;
}

  constructor(private serieService:SerieService) { }

  

  ngOnInit() {
    this.getSeriesList();
   
  }

}


