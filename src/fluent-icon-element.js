(function (){
    const template = document.createElement("template");
    template.innerHTML = `
    <style>
        :host {
            display: inline-block;
        }

        .icon {
            display: block;
            font-size: 16px;
            text-rendering: optimizeLegibility;
        }
    </style>
    <span class="icon"></span>
    `;

    class FluentFontIcon extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: "open" });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

        static get observedAttributes() {
            return ["font-family", "glyph", "font-size", "foreground"];
        }

        /* Attributes. */
        get fontFamily() {
            return this.getAttribute("font-family");
        }

        set fontFamily(value) {
            this.setAttribute("font-family", value);
            this.setFontFamily();
        }

        get glyph() {
            return this.getAttribute("glyph");
        }

        set glyph(value) {
            this.setAttribute("glyph", value);
            this.setGlyph();
        }

        get fontSize() {
            return this.getAttribute("font-size");
        }

        set fontSize(value) {
            this.setAttribute("font-size", value);
            this.setFontSize();
        }

        get foreground() {
            return this.getAttribute("foreground");
        }

        set foreground(value) {
            this.setAttribute("foreground", value);
            this.setForeground();
        }

        /* DOM */
        get iconSpan() {
            this._iconSpan ??= this.shadowRoot.querySelector(".icon");
            return this._iconSpan;
        }

        connectedCallback() {
            this.setFontFamily();
            this.setGlyph();
            this.setFontSize();
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch(name){
                case "font-family": this.setFontFamily(); break;
                case "glyph": this.setGlyph(); break;
                case "font-size": this.setFontSize(); break;
                case "foreground": this.setForeground(); break;
            }
        }

        setFontFamily() {
            this.iconSpan.style.fontFamily = this.fontFamily;
        }

        setGlyph() {
            this.iconSpan.innerHTML = this.glyph;
        }

        setFontSize() {
            if(this.fontSize !== null)
            {
                const pixelSize = this.fontSize + "px";
                const thisStyle = this.style;
                const style = this.iconSpan.style;

                style.fontSize = pixelSize;
                style.height = pixelSize;
                style.width = pixelSize;

                thisStyle.height = pixelSize;
                thisStyle.width = pixelSize;
            }
        }

        setForeground() {
            if(this.foreground !== null)
                this.iconSpan.style.color = this.foreground;
        }
    }

    customElements.define("fluent-font-icon", FluentFontIcon);
})();