import { ToastProvider } from '../../providers/toast/toast';
import { CadastroProvider } from '../../providers/cadastro/cadastro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { observable } from 'rxjs';




@IonicPage()
@Component({
  selector: 'page-cadastro-produtos',
  templateUrl: 'cadastro-produtos.html',
})
export class CadastroProdutosPage {

  form: FormGroup;
  pedidos: any;
  pratos: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private cadastroProvider: CadastroProvider,
              private toast: ToastProvider,
              private formBuilder: FormBuilder
              ) {
                this.pedidos = this.cadastroProvider.getAll();
                // this.createForm();
              }

  // private createForm(){
  //   this.form = this.formBuilder.group({
  //     key:[''],
  //     prato:[this.prato]
  //   });

  // }

  newItemProdutos() {
    this.navCtrl.push('AddprodutosPage');
  }


  removeItemProdutos(Key: string) {
    this.cadastroProvider.remove(Key);
    this.toast.show('Produto removido com sucesso.');
  }

}




