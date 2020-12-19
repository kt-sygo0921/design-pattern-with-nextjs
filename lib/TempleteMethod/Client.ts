import { ClassA } from "./ClassA";
import { ClassB } from "./ClassB";

class TemplateMethodClient {
    main() {
        const obj1 = new ClassA();
        const StringA = obj1.operation1();
        console.log(StringA);

        const obj2 = new ClassB();
        obj2.operation1();
        const StringB = obj2.operation1();
        console.log(StringB);

        return 'Cosoleを見てみよう'
    }
}

export {TemplateMethodClient};
