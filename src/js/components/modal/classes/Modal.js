import Resize from "./Resize";
import Drag from "./Drag";
import Confirm from "../../confirm";
import Button from "./Button";
import { icons } from "../modules/Icons";
import { tools } from "../modules/Tools";

class Modal {
    constructor(data) {
        Object.assign(this, data);

        this.isClose = false;
        this.isFullscreen = false;

        this.loadingButtons = [];

        if (this.autoOpen) {
            this.init();
        }
    }

    async init() {
        await this.open();
    }

    async open() {
        this.modal = this.render();
        document.body.appendChild(this.modal);

        if (document.body.scrollHeight > document.body.clientHeight) {
            document.body.classList.add("noscroll");
        }

        this.modal.classList.add("in");
        await tools.animationend(this.modal);

        if (this.onOpen) {
            this.onOpen();
        }
    }

    render() {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        if (this.isFullscreen) {
            modal.classList.add("fullscreen");
        }
        modal.addEventListener("mousedown", this.checkClose.bind(this));
        modal.addEventListener("touchstart", this.checkClose.bind(this), { passive: true });
        modal.addEventListener("click", this.handleClose.bind(this));

        const content = document.createElement("div");
        content.classList.add("content");

        if (this.maxWidth) {
            content.style.maxWidth = this.maxWidth + "px";
        } else {
            content.style.maxWidth = "600px";
        }
        content.addEventListener("click", (e) => e.stopPropagation());
        modal.appendChild(content);

        const header = document.createElement("div");
        header.classList.add("header");
        content.appendChild(header);

        if (this.customTitle) {
            header.appendChild(this.customTitle());
        } else {
            const title = document.createElement("div");
            title.classList.add("title");
            title.textContent = this.title;
            header.appendChild(title);
        }

        const actions = document.createElement("div");
        actions.classList.add("actions");
        header.appendChild(actions);

        this.headerActions.forEach((action) => {
            const button = new Button("IconButton", {
                icon: action.icon,
                buttonSize: "large",
                svgSize: "large",
                ariaLabel: action.ariaLabel,
                onClick: action.onClick,
            });
            actions.appendChild(button.get());
        });

        if (this.fullscreen) {
            const button = new Button("IconButton", {
                icon: icons.get("arrows-fullscreen"),
                buttonSize: "large",
                svgSize: "large",
                ariaLabel: "Pantalla completa",
                onClick: () => {
                    this.isFullscreen = !this.isFullscreen;
                    this.rerender();
                    if (this.onFullscreen) {
                        this.onFullscreen(this.isFullscreen);
                    }
                },
            });
            actions.appendChild(button.get());
        }

        if (this.isFullscreen) {
            modal.classList.add("fullscreen");
            content.removeAttribute("style");
        } else {
            modal.classList.remove("fullscreen");
        }

        const closeIconButton = new Button("IconButton", {
            icon: icons.get("x-lg"),
            buttonSize: "large",
            svgSize: "large",
            ariaLabel: "Cerrar modal",
            onClick: () => {
                this.isClose = true;
                this.handleClose();
            },
        });
        actions.appendChild(closeIconButton.get());

        this.body = document.createElement("div");
        this.body.classList.add("body");
        this.body.appendChild(this.content);
        content.appendChild(this.body);

        const footer = document.createElement("div");
        footer.classList.add("footer");
        content.appendChild(footer);

        const closeButton = new Button("TextButton", {
            type: "button",
            text: "Cerrar",
            ariaLabel: "Cerrar modal",
            classes: ["btn", "secondary-btn"],
            onClick: () => {
                this.isClose = true;
                this.handleClose();
            },
        });
        footer.appendChild(closeButton.get());

        this.footerActions.forEach((action) => {
            const button = new Button(action.loading ? "LoadingButton" : "TextButton", {
                type: action.type,
                text: action.text,
                ariaLabel: action.ariaLabel,
                classes: action.classes,
                onClick: action.onClick,
            });
            footer.appendChild(button.get());

            if (action.loading) {
                this.loadingButtons.push(button);
            }
        });

        const resize = new Resize({
            el: modal,
            maxWidth: this.maxWidth,
            onResize: (isResize) => {
                drag.isResize = isResize;
            },
        });

        const drag = new Drag({
            el: modal,
            maxWidth: this.maxWidth,
            onDrag: (isDrag) => {
                this.isFullscreen = false;
                resize.isDrag = isDrag;
            },
        });

        return modal;
    }

    checkClose(e) {
        if (e.target !== this.modal) {
            return;
        }

        const rect = this.modal.firstChild.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const contentWidth = this.modal.firstChild.offsetWidth;
        const contentHeight = this.modal.firstChild.offsetHeight;

        if (x >= -10 && x <= contentWidth + 10 && y >= -10 && y <= contentHeight + 10) {
            return;
        }

        this.isClose = true;
    }

    async handleClose() {
        if (!this.isClose) {
            return;
        }

        if (this.confirmClose) {
            const confirm = new Confirm({
                title: "¿Cerrar ventana?",
                description: "¿Estás seguro de que deseas cerrar? Los datos que no hayan sido guardados se perderán.",
                accept: "Cerrar",
                cancel: "Cancelar",
            });
            const confirmResponse = await confirm.question();

            if (!confirmResponse) {
                this.isClose = false;
                return;
            }
        }

        this.close();
    }

    async close() {
        this.loadingButtons.forEach((button) => {
            button.stop();
        });

        this.modal.classList.add("out");
        await tools.animationend(this.modal);

        this.modal.remove();
        if (!document.querySelector(".modal")) {
            document.body.classList.remove("noscroll");
        }
        if (this.onClose) {
            this.onClose();
        }
        delete this;
    }

    rerender(content = this.content) {
        this.content = content;
        this.modal.remove();
        this.modal = this.render();
        document.body.appendChild(this.modal);
    }
}

export default Modal;
