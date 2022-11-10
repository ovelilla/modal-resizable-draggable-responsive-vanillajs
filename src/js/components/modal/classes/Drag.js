class Drag {
    constructor(data) {
        Object.assign(this, data);

        this.isDrag = false;
        this.isResize = false;

        this.start = {
            x: 0,
            y: 0,
        };

        this.curr = {
            x: 0,
            y: 0,
        };

        this.style = {
            top: 0,
            left: 0,
        };

        this.init();
    }

    init() {
        this.startEvent = this.handleStart.bind(this);
        this.el.addEventListener("mousemove", this.handleMove.bind(this));
        this.el.addEventListener("touchstart", this.handleMove.bind(this), { passive: true });
    }

    handleMove(e) {
        if (this.isDrag || this.isResize) {
            return;
        }

        const rect = this.el.firstChild.getBoundingClientRect();

        const x = (e.clientX ?? e.touches[0].clientX) - rect.left;
        const y = (e.clientY ?? e.touches[0].clientY) - rect.top;

        const width = rect.width;

        const header = this.el.querySelector(".header");
        const headerHeight = header.offsetHeight;

        this.el.removeEventListener("mousedown", this.startEvent);
        this.el.removeEventListener("touchstart", this.startEvent, { passive: true });

        if (x > 10 && x < width - 10 && y > 10 && y < headerHeight) {
            this.el.classList.add("drag");

            this.el.addEventListener("mousedown", this.startEvent);
            this.el.addEventListener("touchstart", this.startEvent, { passive: true });
        } else {
            this.el.classList.remove("drag");
        }
    }

    handleStart(e) {
        this.isDrag = true;
        this.onDrag(this.isDrag);

        this.drag = this.handleDrag.bind(this);
        this.end = this.handleEnd.bind(this);

        document.addEventListener("mousemove", this.drag);
        document.addEventListener("touchmove", this.drag, { passive: true });
        document.addEventListener("mouseup", this.end);
        document.addEventListener("touchend", this.end, { passive: true });

        this.start.x = e.clientX ?? e.touches[0].clientX;
        this.start.y = e.clientY ?? e.touches[0].clientY;
    }

    handleDrag(e) {
        const x = e.clientX ?? e.touches[0].clientX;
        const y = e.clientY ?? e.touches[0].clientY;

        this.curr.x = x - this.start.x;
        this.curr.y = y - this.start.y;

        this.start.x = x;
        this.start.y = y;

        const rect = this.el.firstChild.getBoundingClientRect();

        this.style.top = rect.top + this.curr.y;
        this.style.left = rect.left + this.curr.x;

        this.el.firstChild.style.position = "absolute";
        this.el.firstChild.style.top = this.style.top + "px";
        this.el.firstChild.style.left = this.style.left + "px";
    }

    handleEnd() {
        this.isDrag = false;
        this.onDrag(this.isDrag);

        document.removeEventListener("mousemove", this.drag);
        document.removeEventListener("touchmove", this.drag, { passive: true });
        document.removeEventListener("mouseup", this.end);
        document.removeEventListener("touchend", this.end, { passive: true });
    }
}

export default Drag;
