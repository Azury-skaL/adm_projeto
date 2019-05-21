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
  prato: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private cadastroProvider: CadastroProvider,
              private toast: ToastProvider,
              private formBuilder: FormBuilder
              ) {
                this.prato= this.navParams.data.pratos;
                this.cadastroProvider.getAll();
                this.createForm();
              }

  private createForm(){
    this.form = this.formBuilder.group({
      key:[''],
      prato:[this.prato]
    });

  }

  cadastrarPedido(){
    if (this.form.valid) {
      this.cadastroProvider.save(this.form.value);
      this.toast.show('Pedido cadastrado no banco de dados.');
      //this.toast.create({ message: 'Seu pedido já está a caminho.', duration: 3000}).present();
      this.navCtrl.pop();
  }

}


}

