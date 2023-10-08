import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termos-de-uso',
  templateUrl: './termos-de-uso.component.html'
})
export class TermosDeUsoComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("Termos de Uso");
    this.metaService.updateTag(
      { name: 'description', content: 'Termos de uso do site' }
    );
  }

}
