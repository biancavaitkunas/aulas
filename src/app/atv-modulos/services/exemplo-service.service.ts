import { EventEmitter, Injectable } from '@angular/core';
import { Medicamento } from '../models/medicamento';

@Injectable({
  providedIn: 'root',
})
export class ExemploServiceService {

  public emitEvent = new EventEmitter();
  public emitMedicamentoEvent = new EventEmitter();

  public remedio: Medicamento = {nome: '', valor: ''};

  private lista: Medicamento[] = [];

  public getLista() {
    return this.lista;
  }

  public getMedicamento(event: number) {
    this.remedio = this.lista[event]
    this.emitMedicamentoEvent.emit(this.remedio);
  }

  public adiciona(nome: string, valor: string) {
    const remedio = { nome: nome, valor: valor };
    this.lista.push(remedio);
    this.emitEvent.emit(this.lista);
  }

  constructor() { }
}
