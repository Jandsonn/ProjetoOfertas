import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let ofertas: OfertasService = new OfertasService()
    console.log(ofertas.getOfertas())


  }

}
