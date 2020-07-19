import {LitElement ,html} from 'lit-element';

class javascriptElement extends LitElement {
    
    render() {
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


        <button id='func' class='button-1'>Function</button> 
        <button id='obj' class='button-1'>Object</button> 
        <button id='scope'  class='button-1'>Scope</button>  
        <button id='eve'  class='button-1'>events</button>     
        <button id='hoi'  class='button-1'>hoisting</button>     

        `;
    }
}


customElements.define('js-element', javascriptElement);
