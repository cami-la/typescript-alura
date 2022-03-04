import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
    
    public template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `
                }).join("")}
            </tbody>
        </table>
        `;
    }

    public update(model: Negociacoes): void {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}