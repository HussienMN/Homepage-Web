( () => {
    const component = {
      name: 'nav',
      ccm: 'https://ccmjs.github.io/ccm/ccm.js',
      config: {
        name1: 'HTML',
        name2: 'CSS',
        name3: 'JavaScript',
        name4: 'Others'
      },
      Instance: function () {
        this.start = async () => {
          
          this.element.innerHTML = `
          <style>
          .button-1{
              border-radius: 8px;
              background-color: #98AFC7;
              margin: 8px;
              font-weight: bold;
              border-style: double;
              height: 2rem;
              width: 15%;
              overflow-wrap: break-word;
              word-wrap: break-word;
          }	
          #nav {
            background-color: coral;
            padding: 20px;
            text-align: left;
          }
          .header {
            background-color: coral;
            padding: 20px;
            text-align: center;
            overflow: hidden;
          }
          </style>
          <div class="header">
            <h2>WWW-Navigator</h2>
            <div id="nav">
              <button class="button-1" onclick="%html%">${this.name1}</button>
              <button class="button-1">${this.name2}</button>
              <button class="button-1">${this.name3}</button>
              <button class="button-1">${this.name4}</button>
            </div>
          `;
        };
      }
    };
    
    let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
  } )();
  