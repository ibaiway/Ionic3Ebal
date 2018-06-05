import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {

  lenguajes:any[];    // array de lenguajes
  name:string;       // Se declaran las variables que se usan despues
  metodo:string;   
  descripcion:string;      
  imagen:string;

 constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) { // se invoca al constructor para establecer lo predeterminado de la pagina
 this.lenguajes=[   // el array se convierte en un array de Json
 {
   name:"Java",
   metodo:"compilado",
   descripcion:"Es el lenguaje de programacion mas conocido",
   imagen:"https://revistadigital.inesem.es/informatica-y-tics/files/2015/10/inesem-java-1024x768.jpg"
 },
 {
  name:"PHP",
  metodo:"Compilado",
  descripcion:"Es muy utilizado en las paginas web para conectarse a las bases de datos",
  imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
},
{
  name:"Ruby",
  metodo:"Interpretado",
  descripcion:"Combina una sintaxis inspirada en Python y Perl con características de programación orientada a objetos similares a Smalltalk.",
  imagen:"http://boxchronicles.com/wp-content/uploads/2015/01/ruby.png"
}

];  }

crear_lenguaje(data){ // recibe informacion y la inserta dentro del array de Json
  this.lenguajes.push(data);
}

enviar(lenguaje){ // Se envia el objeto que recibe a InfoPage con el identificador "item"
  this.navCtrl.push(InfoPage,{item: lenguaje});
}

eliminar(lenguaje){  // Elimina del array de Json el objeto que recibe
  const index: number = this.lenguajes.indexOf(lenguaje); // Se asigna a la variable "index", el index en el que se encuentra el objeto a eliminar
  this.lenguajes.splice(index, 1); //se elimina del array el objeto
}

  doPrompt() { // Muestra un alert con inputs a traves del cual se insertan nuevos objetos al array
    let prompt = this.alertCtrl.create({ 
      title: 'Login',
      message: "Inserta un nuevo lenguaje",
      inputs: [
        {
          name: 'name',
          placeholder: 'Nombre:'
        },
        {
          name: 'metodo',
          placeholder: 'Tipo de lenguaje:'
        },
        {
          name: 'descripcion',
          placeholder: 'Descripcion:'
        },
        {
          name: 'imagen',
          placeholder: 'Link de imagen:'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            this.crear_lenguaje(data); // En caso de pulsar el boton de Guardar se creara el nuevo objeto
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
