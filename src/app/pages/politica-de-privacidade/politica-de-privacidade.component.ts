import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-de-privacidade',
  templateUrl: './politica-de-privacidade.component.html'
})
export class PoliticaDePrivacidadeComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("Política de Privacidade");
    this.metaService.updateTag(
      { name: 'description', content: 'Política de Privacidade do Site' }
    );
  }

}
