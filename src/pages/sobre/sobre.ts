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
              private encomendas: EncomendasProvider,
              private toast: ToastProvider,) {

                this.encomenda = this.encomendas.getAll();
              }
              
              
              removeItemProdutos(Key: string, prato: any, quarto: any) {
                this.encomenda.remove(Key, prato.data, quarto.data);
                this.toast.show('Produto removido com sucesso.');
              }
}
