import {Decorator} from './Decorator';

class ConcreateComponentB extends Decorator {
    method1() {
        return `依存先：(${this.component.method1()}) 実行先：ConcreateComponentB method1`
    }
    method2() {
        return `依存先：(${this.component.method2()}) 実行先：ConcreateComponentA method2`
    }
    method3() {
        return 'ConcreateComponentB method3';
    }
}

export {ConcreateComponentB}