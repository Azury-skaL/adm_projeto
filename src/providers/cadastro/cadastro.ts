import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CadastroProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CadastroProvider Provider');
  }

}
