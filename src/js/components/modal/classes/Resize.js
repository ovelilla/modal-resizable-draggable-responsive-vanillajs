class Resize {
    constructor(data) {
        Object.assign(this, data);

        this.isStart = false;
        this.isResize = false;
        this.isDrag = false;

        this.direction = "";

        this.start = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            top: 0,
            left: 0,
        };

        this.curr = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        };

        this.diff = {
            x: 0,
            y: 0,
        };

        this.limit = {
            x: false,
            y: false,
        };

        this.style = {
            top: 0,
            left: 0,
            width: 0,
            height: 0,
        };

        this.init();
    }

    init() {
        this.el.addEventListener("mousemove", this.handleMove.bind(this));
        this.el.addEventListener("touchstart", this.handleMove.bind(this), { passive: true });
        this.el.addEventListener("mousedown", this.handleStart.bind(this));
        this.el.addEventListener("touchstart", this.handleStart.bind(this), { passive: true });
    }

    handleMove(e) {
        if (this.isResize || this.isDrag) {
            return;
        }

        const rect = this.el.firstChild.getBoundingClientRect();

        const x = (e.clientX ?? e.touches[0].clientX) - rect.left;
        const y = (e.clientY ?? e.touches[0].clientY) - rect.top;

        const width = rect.width;
        const height = rect.height;

        let direction = "";
        this.isStart = true;

        if (x > 10 && x < width - 10 && y >= -10 && y <= 10) {
            direction = "top";
        } else if (x >= width - 10 && x <= width + 10 && y >= -10 && y <= 10) {
            direction = "top-right";
        } else if (x >= width - 10 && x <= width + 10 && y > 10 && y < height - 10) {
            direction = "right";
        } else if (x >= -10 && x <= 10 && y >= height - 10 && y <= height + 10) {
            direction = "bottom-left";
        } else if (x > 10 && x < width - 10 && y >= height - 10 && y <= height + 10) {
            direction = "bottom";
        } else if (x >= width - 10 && x <= width + 10 && y >= height - 10 && y <= height + 10) {
            direction = "bottom-right";
        } else if (x >= -10 && x <= 10 && y > 10 && y < height - 10) {
            direction = "left";
        } else if (x >= -10 && x <= 10 && y >= -10 && y <= 10) {
            direction = "top-left";
        } else {
            this.isStart = false;
        }

        if (this.direction === direction) {
            return;
        }

        this.el.classList.remove("resize-" + this.direction);

        if (this.isStart) {
            this.el.classList.add("resize-" + direction);
        }

        this.direction = direction;
    }

    handleStart(e) {
        if (!this.isStart) {
            return;
        }

        this.isResize = true;
        this.onResize(this.isResize);

        const rect = this.el.firstChild.getBoundingClientRect();

        this.el.firstChild.style.top = rect.top + "px";
        this.el.firstChild.style.left = rect.left + "px";
        this.el.firstChild.style.width = rect.width + "px";
        this.el.firstChild.style.height = rect.height + "px";
        this.el.firstChild.style.position = "absolute";

        this.el.classList.remove("fullscreen");

        this.start.x = e.clientX ?? e.touches[0].clientX;
        this.start.y = e.clientY ?? e.touches[0].clientY;

        this.start.width = rect.width;
        this.start.height = rect.height;
        this.start.top = rect.top;
        this.start.left = rect.left;

        this.limit.x = false;
        this.limit.y = false;

        this.resize = this.handleResize.bind(this);
        this.end = this.handleEnd.bind(this);

        document.addEventListener("mousemove", this.resize);
        document.addEventListener("touchmove", this.resize, { passive: true });
        document.addEventListener("mouseup", this.end);
        document.addEventListener("touchend", this.end);
    }

    handleResize(e) {
        this.el.firstChild.style.removeProperty("max-width");

        this.rect = this.el.firstChild.getBoundingClientRect();

        const x = e.clientX ?? e.touches[0].clientX;
        const y = e.clientY ?? e.touches[0].clientY;

        this.curr.x = x - this.rect.left;
        this.curr.y = y - this.rect.top;

        this.curr.width = this.el.firstChild.offsetWidth;
        this.curr.height = this.el.firstChild.offsetHeight;

        this.diff.x = x - this.start.x;
        this.diff.y = y - this.start.y;

        this.start.x = x;
        this.start.y = y;

        this.style.top = this.rect.top;
        this.style.left = this.rect.left;
        this.style.width = this.rect.width;
        this.style.height = this.rect.height;

        switch (this.direction) {
            case "top":
                this.top();
                break;
            case "top-right":
                this.top();
                this.right();
                break;
            case "right":
                this.right();
                break;
            case "bottom-left":
                this.bottom();
                this.left();
                break;
            case "bottom":
                this.bottom();
                break;
            case "bottom-right":
                this.bottom();
                this.right();
                break;
            case "left":
                this.left();
                break;
            case "top-left":
                this.top();
                this.left();
                break;
        }

        if (!this.direction) {
            return;
        }

        this.el.firstChild.style.top = this.style.top + "px";
        this.el.firstChild.style.left = this.style.left + "px";
        this.el.firstChild.style.height = this.style.height + "px";
        this.el.firstChild.style.width = this.style.width + "px";
    }

    top() {
        this.style.top = Math.ceil(this.rect.top + this.diff.y);
        this.style.height = this.curr.height - this.diff.y;

        if ((this.limit.y && this.curr.y > 0) || this.curr.height - this.diff.y < 208) {
            this.limit.y = true;

            this.style.top = this.start.top + this.start.height - 208;
            this.style.height = 208;
        } else {
            this.limit.y = false;
        }
    }

    right() {
        this.style.width = this.curr.width + this.diff.x;

        if ((this.limit.x && this.curr.x < 300) || this.curr.width + this.diff.x < 300) {
            this.limit.x = true;

            this.style.width = 300;
        } else {
            this.limit.x = false;
        }
    }

    bottom() {
        this.style.height = this.curr.height + this.diff.y;

        if ((this.limit.y && this.curr.y < 208) || this.curr.height + this.diff.y < 208) {
            this.limit.y = true;

            this.style.height = 208;
        } else {
            this.limit.y = false;
        }
    }

    left() {
        this.style.left = Math.ceil(this.rect.left + this.diff.x);
        this.style.width = this.curr.width - this.diff.x;

        if ((this.limit.x && this.curr.x > 0) || this.curr.width - this.diff.x < 300) {
            this.limit.x = true;

            this.style.left = this.start.left + this.start.width - 300;
            this.style.width = 300;
        } else {
            this.limit.x = false;
        }
    }

    handleEnd() {
        this.isStart = false;
        this.isResize = false;
        this.onResize(this.isResize);

        document.removeEventListener("mousemove", this.resize);
        document.removeEventListener("touchmove", this.resize);
        document.removeEventListener("mouseup", this.end);
        document.removeEventListener("touchend", this.end);
    }
}

export default Resize;
