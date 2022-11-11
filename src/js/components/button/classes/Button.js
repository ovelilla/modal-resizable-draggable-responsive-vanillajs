import IconButton from "./IconButton";
import TextButton from "./TextButton";
import LoadingButton from "./LoadingButton";

class Button {
    constructor(className, options) {
        const classes = {
            IconButton,
            TextButton,
            LoadingButton,
        };

        return new classes[className](options);
    }
}

export default Button;
