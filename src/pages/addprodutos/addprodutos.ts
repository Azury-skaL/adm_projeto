import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastProvider } from '../../providers/toast/toast';
import { Observable } from 'rxjs';
import { CadastroProvider } from '../../providers/cadastro/cadastro';



@IonicPage()
@Component({
  selector: 'page-addprodutos',
  templateUrl: 'addprodutos.html',
})
export class AddprodutosPage {

  form: FormGroup;
  name: string

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toast: ToastProvider,
              private formBuilder: FormBuilder,
              private CadastroProvider: CadastroProvider) {

                this.createForm();
  }

  private createForm(){
    this.form = this.formBuilder.group({
      key:[''],
      name: [this.name]

    });

  }

  onSubmit(){
    if (this.form.valid) {
      this.CadastroProvider.save(this.form.value,);
      this.toast.show('Produtos salvo com sucesso');
      // this.toast.create({ message: 'Categoria salva com sucesso', duration: 3000}).present();
      
    }
  }

}
