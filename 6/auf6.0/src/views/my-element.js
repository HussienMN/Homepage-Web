import {LitElement ,html} from 'lit-element';



class myElement extends LitElement {
    
    render() {
        return html `
        <p>Registration From als Web Component mit Litelement</p>

        <form>
        <fieldset>
            <legend>persönliche Informationen:</legend>
            <label for="fname">Vorname:</label><br>
            <input type="text" id="fname" name="fname" value="John"><br>
            <label for="lname">Nachname:</label><br>
            <input type="text" id="lname" name="lname" value="musterman"><br>
            <label for="email">Email:</label><br>
            <input type="Email" id="email" name="email" value=""><br>
            <label for="password">Password:</label><br>
            <input type="password" id="psword" name="psword" value=""><br><br>
            <input type="submit" value="Submit" style="background-color:cadetblue; width: 160px; height : 25px">
        </fieldset>
        </form>
                    
        `;
    }
}

class myElement2 extends LitElement{
    render(){
        return html `
        
        <div>
        Mein erstes Webmodul mit Litelement 
        </div>
        
        `;
    }
}



customElements.define('my-element', myElement);
customElements.define('my-element-2', myElement2);