import { LitElement, html } from 'lit-element';

class MyElement extends LitElement { 

  render() {
    return html`
    <center>
    <style type="text/css">
    div{
        width: 100px;
        height: 100px;
        background: green;
        transition: width 1s, height 4s;
    }
    div:hover{
        width: 300px;
        height: 200px;
    }
</style>

<center>
    <svg id="color">
    <rect x="15" y="10" height="400" width="80"/>
                        <circle id="circle" cx="55" cy="35" r="10" fill="red" stroke-width="3"/>
                        <circle id="circle2" cx="55" cy="75" r="10" fill="orange" stroke-width="3"/>
                        <circle id="circle3" cx="55" cy="115" r="10" fill="green" stroke-width="3"/>
    </svg>
</center>

    <svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="black"
        d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

    <circle r="5" fill="red">
        <animateMotion dur="10s" repeatCount="indefinite"
        path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
    </circle>
    </svg>

    <svg viewBox="0 0 600 300">
    <!-- Draw the outline of the motion path in grey, along
    with 2 small circles at key points -->
    <path d="M10,110 A120,120 -45 0,1 110 10
    A120,120 -45 0,1 10,110"
    stroke="black" stroke-width="2"
    fill="none" id="theMotionPath"/>
    <circle cx="10" cy="110" r="3" fill="lightgrey" />
    <circle cx="110" cy="10" r="3" fill="lightgrey" />
    <!-- Red circle which will be moved along the motion path. -->
    <circle cx="" cy="" r="5" fill="red">
    <!-- Define the motion path animation -->
    <animateMotion dur="6s" repeatCount="indefinite">
    <mpath href="#theMotionPath"/>
    </animateMotion>
    </circle>
    </svg>
        
    </center>
    `;
  }
  doThing(e) {
    let color = "red";
    const circle_svg = document.getElementById('circle');
    setInterval(()=>{
        color = color === 'red'?'greed' :'red';
        circle.setAttribute('fill',color);
    },500);
  }
  
  alertme(e) {
    alert('hi');
  }
  move(e) {
	const circle_id = document.getElementById('circle_id');
		circle_id.addEventListener("mousemove", event=>{
			circle_id.setAttribute('cx',event.x);
			circle_id.setAttribute('cy',event.y);
		});  }
}

customElements.define('my-bezier-2', MyElement);

