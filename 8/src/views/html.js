import {LitElement ,html} from 'lit-element';

class htmlElement extends LitElement{
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
        <a href="#heading"><button id='heading' class='button-1'>Heading</button></a>
        <a href="#paragraph"><button id='paragraph' class='button-1'>Paragraph</button> </a>
        <a href="#links"><button id='links' class='button-1'>links</button></a> 
        <a href="#images"><button id='img' class='button-1'>Images</button></a>    
        `;
    }
}
customElements.define('html-element', htmlElement);
