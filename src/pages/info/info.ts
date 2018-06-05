import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  lenguaje:any; // declaramos la variable
  urlg:any;    //declaramos la variable
  urly:any;    //delaramos la variable
  constructor(public navCtrl: NavController, public navParams: NavParams) { //se le añaden al constructor las clases de Ionic que utilize
    this.lenguaje= navParams.get("item"); // asignamos a la variable el valor que recibimos de la anterior pagina con el valor item
    this.urlg="https://www.google.es/search?q="+this.lenguaje.name // asignamos a la variable una url  y le sumamos el nombre del objeto. Con esto nos mostrara resultados de google relacionados
    this.urly="https://www.youtube.com/results?search_query="+this.lenguaje.name+"+tutorial" // lo mismo que la anterior pero en este caso buscara tutoriales en youtube.
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
