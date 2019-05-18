import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { CadastroProdutosPage } from '../cadastro-produtos/cadastro-produtos';
import { SobrePage } from '../sobre/sobre';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CadastroProdutosPage;
  tab3Root = SobrePage;

  constructor() {

  }
}
