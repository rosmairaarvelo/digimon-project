import { Component, OnInit } from '@angular/core';
import { DigimonServicesService } from 'src/app/services/digimon-services.service';
import { digimon } from 'src/app/models/digimon-model';

@Component({
  selector: 'app-digimons',
  templateUrl: './digimons.component.html',
  styleUrls: ['./digimons.component.css']
})
export class DigimonsComponent implements OnInit {
  listaDigimons: any;
  filtro: any;
  divList = true;
  temp: any;
  msj = '';

  constructor( private digimonService: DigimonServicesService) { }

  ngOnInit() {
    this.digimonService.getAllDigimons().subscribe((response: digimon) => {
      this.listaDigimons = response;
      this.temp = response;
      },
      error => {
        console.log('Error: ' + JSON.stringify(error));
      }
    )
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1;
    });

    this.listaDigimons = temp;
    this.listaDigimons.offset = 0;
  }

}
