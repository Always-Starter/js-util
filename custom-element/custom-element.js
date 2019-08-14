// This is a custom element which can handle events
window.customElements.define('custom-square', class CustomSquare extends HTMLElement {
    static get observedAttributes() {
        // If we use backgroundColor, observedAttributes won't return it.
        return ['width', 'height', 'backgroundcolor'];
    }

    constructor() {
        super();
        this.square = document.createElement('div');

        const squares = document.querySelector('custom-square');
        squares.appendChild(this.square);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        console.log('Custom square element attributes changed.');
        if (oldValue !== newValue) {
            this.updateStyle(name, newValue);
        }
    }

    updateStyle(name, val) {
        this.square.style[name] = val;

        if (name === 'backgroundcolor') {
            this.square.style.backgroundColor = val;
        }
    }
});