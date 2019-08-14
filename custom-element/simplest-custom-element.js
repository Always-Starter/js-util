window.customElements.define('simple-element',
class MyElement extends HTMLElement {
        constructor() {
            super();

            const div = document.createElement('div');
            div.innerHTML = 'This is a custom element';
            // const shadow = this.attachShadow({ mode: 'open' });
            const eleContainer = document.querySelectorAll('simple-element');

            eleContainer.forEach(elem => elem.appendChild(div));
        }
    },
);