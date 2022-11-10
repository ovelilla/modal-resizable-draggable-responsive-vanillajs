# modal-resizable-draggable-responsive-vanillajs

Responsive resizable and draggable vanilla JavaScript modal

Demo: https://regal-cheesecake-05c578.netlify.app/

```
import Modal from "./components/modal";
import { icons } from "./components/modal/modules/Icons";

const openModalBtn = document.querySelector("#open-modal-btn");

openModalBtn.addEventListener("click", async () => {
    const modal = new Modal({
        title: "Título modal",
        // customTitle: () => {
        //     const logo = document.createElement("img");
        //     logo.src = "/img/logo.png";
        //     logo.classList.add("custom-title");
        //     return logo;
        // },
        content: modalContent(),
        maxWidth: "700px",
        autoOpen: true,
        fullscreen: true,
        confirmClose: true,
        headerActions: [
            {
                ariaLabel: "Ayuda",
                icon: icons.get("question-lg"),
                onClick: () => {
                    console.log("Ayuda");
                },
            },
        ],
        footerActions: [
            {
                text: "Crear",
                type: "button",
                ariaLabel: "Crear presupuesto",
                classes: ["btn", "primary-btn"],
                loading: true,
                onClick: () => {
                    console.log("Crear");
                },
            },
        ],
        onOpen: () => {
            console.log("Abrir");
        },
        onClose: () => {
            console.log("Cerrar");
        },
        onFullscreen: (isFullscreen) => {
            console.log(isFullscreen);
        },
    });
});

function modalContent() {
    const div = document.createElement("div");

    const p = document.createElement("p");
    p.textContent = "Modal content";
    div.appendChild(p);

    return div;
}

```
