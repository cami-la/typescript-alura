import { Negociacao } from './negociacao.js';

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}
