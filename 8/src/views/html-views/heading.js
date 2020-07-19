import {LitElement ,html} from 'lit-element';
import {htmlElement} from '../html';


class headElement extends LitElement{
    render(){
        return html `
        <style>
        .button-1{
            border-radius: 8px;
            background-color: #98AFC7;
            margin: 8px;
            font-weight: bold;
            border-style: double;
            height: 2rem;
            display: table;
            overflow-wrap: break-word;
            word-wrap: break-word;

        }	
        </style>
            <p>Heading</p>
        `;
    }

}
customElements.define('heading-element', headElement);
