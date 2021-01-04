import {Abstract} from './Abstract';

abstract class Decorator extends Abstract {
    protected component: Abstract;

    constructor(component: Abstract) {
        super();
        this.component = component
    }
}

export {Decorator}