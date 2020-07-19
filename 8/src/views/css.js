import {LitElement ,html} from 'lit-element';

class cssElement extends LitElement{
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
        <button id='heading' class='button-1'>Selectors</button> 
        <button id='paragraph' class='button-1'>Colors</button> 
        <button id='links' class='button-1'>boxes</button>   
        <button id='img' class='button-1'>display</button>     
        <button id='tables' class='button-1'>Float</button>          
        `;
    }
}


customElements.define('css-element', cssElement);
