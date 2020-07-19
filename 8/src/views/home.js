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
            overflow-wrap: break-word;
            word-wrap: break-word;
        }	
        </style>

        <center> <h1>WWW-Navigator</h1> </center>

        <a href="/html"><button class="button-1">HTML</button></a>
        <a href="/css"><button class="button-1">CSS</button></a>
        <a href="/javascript"><button class="button-1">Javascript</button></a>
        <a href="/others"><button class="button-1">Others</button></a>
     
   
        `;
    }
}
customElements.define('nav-element', navElement);