import {Decorator} from './Decorator';

class ConcreateComponentC extends Decorator {
    method1() {
        return `依存先：(${this.component.method1()}) 実行先：ConcreateComponentC method1`
    }
    method2() {
        return `依存先：(${this.component.method2()}) 実行先：ConcreateComponentC method2`
    }
}

export {ConcreateComponentC}