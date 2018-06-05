import { Component } from '@angular/core';

import { ListaPage } from '../lista/lista';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListaPage;

  constructor() {

  }
}
