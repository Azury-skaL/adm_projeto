import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EncomendasProvider } from '../../providers/encomendas/encomendas';
import { ToastProvider } from '../../providers/toast/toast';



@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {

  encomenda: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private encomendasProvider: EncomendasProvider,
              private toast: ToastProvider,) 
              {
                this.encomenda = this.encomendasProvider.getAll();
              }
              
              
    removeItemProdutos(Key: string) {
           this.encomendasProvider.remove(Key);
            this.toast.show('Encomenda removida com sucesso.');
          }

}
