import {LitElement ,html} from 'lit-element';



class navElement extends LitElement {
    
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
            width: 15%;
        }	
        </style>

        <center> <h1>WWW-Navigator</h1> </center>

        <button id='html' class='button-1'>HTML</button> 
        <button id='css' class='button-1'>CSS</button> 
        <button id='js'  class='button-1'>Javascript</button>  
        <button id='js'  class='button-1'>others</button>     
   
        `;
    }
}

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
            width: 35%;
            display: table;
            overflow-wrap: break-word;
            word-wrap: break-word;

        }	
        </style>
        <button id='heading' class='button-1'>Heading</button> 
        <button id='paragraph' class='button-1'>Paragraph</button> 
        <button id='links' class='button-1'>links</button>   
        <button id='img' class='button-1'>Images</button>     
        <button id='tables' class='button-1'>Tables</button>          
        `;
    }
}


customElements.define('nav-element', navElement);
customElements.define('html-element', htmlElement);
