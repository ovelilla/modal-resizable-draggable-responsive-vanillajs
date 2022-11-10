class TextButton {
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

        button.type = this.type ?? "button";
        button.textContent = this.text ?? "";
        button.ariaLabel = this.ariaLabel ?? "";

        if (this.classes) {
            button.classList.add(...this.classes);
        }

        if (this.icon) {
            button.appendChild(this.icon);
        }

        button.addEventListener("click", (e) => {
            e.stopPropagation();
            this.onClick();
        });

        return button;
    }
}

export default TextButton;
