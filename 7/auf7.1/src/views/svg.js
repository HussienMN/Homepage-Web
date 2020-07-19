import { LitElement, html } from 'lit-element';

class svgGraph extends LitElement {

  render() {
    return html`
    <style>
    body {
        font-family: 'Open Sans', sans-serif;
      }
      
      .graph .labels.x-labels {
        text-anchor: middle;
      }
      
      .graph .labels.y-labels {
        text-anchor: end;
      }
      
      
      .graph {
        height: 500px;
        width: 800px;
      }
      
      .graph .grid {
        stroke: #ccc;
        stroke-dasharray: 0;
        stroke-width: 1;
      }
      
      .labels {
        font-size: 13px;
      }
      
      .label-title {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 12px;
        fill: black;
      }
      
      .data {
        fill: red;
        stroke-width: 1; 
      }
    </style>
    

<svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="graph" aria-labelledby="title" role="img">
  <title id="title">A line chart showing some information</title>
<g class="grid x-grid" id="xGrid">
<rect x="95" y="290" width="35" height="80"
style=" fill: #51A540" />
<rect x="160" y="245" width="35" height="125"
style="fill:#2AE43C" />
<rect x="230" y="186" width="35" height="185"
style="fill: #1B4A51" />
<rect x="300" y="290" width="35" height="80"
style="fill:#0BE28C" />
<rect x="370" y="230" width="35" height="139"
style="fill: #5A4CD5" />
<rect x="445" y="100" width="35" height="270"
style="fill:#2AE43C" />
<rect x="515" y="230" width="35" height="139"
style="fill: #F0CE20" />
<rect x="595" y="232" width="35" height="138"
style="fill:#F04320" />
<rect x="660" y="310" width="35" height="60"
style="" />
  <line x1="90" x2="90" y1="5" y2="371"></line>
</g>
<g class="grid y-grid" id="yGrid">
  <line x1="90" x2="705" y1="370" y2="370"></line>
</g>
  <g class="labels x-labels">
  <text x="100" y="400">Bonn</text>
  <text x="173" y="400">Bremen</text>
  <text x="246" y="400">Köln</text>
  <text x="319" y="400">Bochum</text>
  <text x="392" y="400">Düsseldorf</text>
  <text x="465" y="400">Berlin</text>
  <text x="538" y="400">Dortmund</text>
  <text x="611" y="400">Stuttgart</text>
  <text x="684" y="400">Aachen</text>
  <text x="400" y="440" class="label-title">Die Stadt</text>
</g>
<g class="labels y-labels">
  <text x="80" y="15">4 Millionen</text>
  <text x="80" y="131">2 Millionen</text>
  <text x="80" y="248">500,000</text>
  <text x="80" y="373">100,000</text>
  <text x="50" y="200" class="label-title">Bevö.</text>
</g>
</svg>
    `;
  }
}

customElements.define('svg-digramm', svgGraph);



