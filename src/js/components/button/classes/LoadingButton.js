class LoadingButton {
    constructor(data) {
        Object.assign(this, data);

        this.init();
    }

    init() {
        this.button = this.create();
    }

    get() {
        return this.button;
    }

    create() {
        const button = document.createElement("button");
        if (this.classes) {
            button.classList.add(...this.classes);
        }
        button.classList.add("loading-btn");
        button.type = this.type ?? "button";
        button.addEventListener("click", this.handleClick.bind(this));

        const text = document.createElement("span");
        text.classList.add("text");
        text.textContent = this.text;
        button.appendChild(text);

        const loader = document.createElement("div");
        loader.classList.add("loading-icon");
        button.appendChild(loader);

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "25 25 50 50");
        loader.appendChild(svg);

        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "50");
        circle.setAttribute("cy", "50");
        circle.setAttribute("r", "20");
        circle.setAttribute("fill", "none");
        circle.setAttribute("stroke-width", "5");
        circle.setAttribute("stroke-miterlimit", "10");
        svg.appendChild(circle);

        return button;
    }

    handleClick() {
        this.button.style.width = `${this.button.offsetWidth}px`;
        this.button.classList.add("loading");
        if (this.onClick) {
            this.onClick();
        }
    }

    stop() {
        this.button.classList.remove("loading");
        this.button.removeAttribute("style");
    }
}

export default LoadingButton;
