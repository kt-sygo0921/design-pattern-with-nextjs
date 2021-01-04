import {Decorator} from './Decorator';

class ConcreateComponentA extends Decorator {
    method1() {
        return `依存先：(${this.component.method1()}) 実行先：ConcreateComponentA method1`
    }
    method2() {
        return `依存先：(${this.component.method2()}) 実行先：ConcreateComponentA method2`
    }
}

export {ConcreateComponentA}