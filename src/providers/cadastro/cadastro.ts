import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';


@Injectable()
export class CadastroProvider {
  private PATH = 'pedidos/';
  constructor(private db: AngularFireDatabase) {}

  
  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('pratos'))
      .snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }));
      })
      )
  }

  getByKey(key: string) {
    const path = this.PATH + key;
    return this.db.object(path).snapshotChanges().pipe(
      map(change => {
        return ({ key: change.payload.key, ...change.payload.val() });
      })
    );
  }

  get(key: string){
    return this.db.object(this.PATH + key)
      .snapshotChanges().pipe(
       map(m => { // aqui já é m pois eu já tenho um único objeto
        return {key: m.payload.key, ...m.payload.val()};
      })
      );
  }

  save(pedidosData: any){
    const pedidos = {
      pratos: pedidosData.name,
    }
    this.db.list(this.PATH).push(pedidos)

  }


  remove(Key: string) {
    this.db.list(this.PATH).remove(Key);
    
  }

}
