class Resize {
    constructor(el) {
        this.el = el;

        this.isResize = false;

        this.direction = "";

        this.start = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
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
        if (this.isResize) {
            return;
        }

        this.rect = this.el.firstChild.getBoundingClientRect();

        const x = (e.clientX ?? e.touches[0].clientX) - this.rect.left;
        const y = (e.clientY ?? e.touches[0].clientY) - this.rect.top;

        const width = this.rect.width;
        const height = this.rect.height;

        this.el.classList.forEach((className) => {
            if (className.startsWith("resize")) {
                this.el.classList.remove(className);
            }
        });

        this.direction = "";

        if (x > 10 && x < width - 10 && y >= -10 && y <= 10) {
            this.direction = "top";
        } else if (x >= width - 10 && x <= width + 10 && y >= -10 && y <= 10) {
            this.direction = "top-right";
        } else if (x >= width - 10 && x <= width + 10 && y > 10 && y < height - 10) {
            this.direction = "right";
        } else if (x >= -10 && x <= 10 && y >= height - 10 && y <= height + 10) {
            this.direction = "bottom-left";
        } else if (x > 10 && x < width - 10 && y >= height - 10 && y <= height + 10) {
            this.direction = "bottom";
        } else if (x >= width - 10 && x <= width + 10 && y >= height - 10 && y <= height + 10) {
            this.direction = "bottom-right";
        } else if (x >= -10 && x <= 10 && y > 10 && y < height - 10) {
            this.direction = "left";
        } else if (x >= -10 && x <= 10 && y >= -10 && y <= 10) {
            this.direction = "top-left";
        }

        if (this.direction) {
            this.el.classList.add("resize");
            this.el.classList.add("resize-" + this.direction);
        }
    }

    handleStart(e) {
        this.isResize = true;

        this.el.classList.remove("fullscreen");
        this.el.firstChild.style.position = "absolute";

        this.el.firstChild.style.top = this.rect.top + "px";
        this.el.firstChild.style.left = this.rect.left + "px";
        this.el.firstChild.style.width = this.rect.width + "px";
        this.el.firstChild.style.height = this.rect.height + "px";

        this.start.x = e.clientX ?? e.touches[0].clientX;
        this.start.y = e.clientY ?? e.touches[0].clientY;

        this.start.width = this.rect.width;
        this.start.height = this.rect.height;

        this.limit.x = false;
        this.limit.y = false;

        this.move = this.handleResize.bind(this);
        this.end = this.handleEnd.bind(this);

        document.addEventListener("mousemove", this.move);
        document.addEventListener("touchmove", this.move, { passive: true });
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
        this.style.top = this.rect.top + this.diff.y;
        this.style.height = this.curr.height - this.diff.y;

        if ((this.limit.y && this.curr.y > 0) || this.curr.height - this.diff.y < 208) {
            this.limit.y = true;

            this.style.top = this.rect.top;
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
        this.style.left = this.rect.left + this.diff.x;
        this.style.width = this.curr.width - this.diff.x;

        if ((this.limit.x && this.curr.x > 0) || this.curr.width - this.diff.x < 300) {
            this.limit.x = true;

            this.style.left = this.rect.left;
            this.style.width = 300;
        } else {
            this.limit.x = false;
        }
    }

    handleEnd(e) {
        this.isResize = false;

        document.removeEventListener("mousemove", this.move);
        document.removeEventListener("touchmove", this.move);
        document.removeEventListener("mouseup", this.end);
        document.removeEventListener("touchend", this.end);
    }
}

export default Resize;
