
interface IAbstract {
    operation1: () => {
        method1: string
        method2: string
    }
}

abstract class Abstract implements IAbstract {
    public abstract method1(): string;
    public abstract method2(): string;

    public operation1() {
        const method1 = this.method1();
        const method2 = this.method2();
        return {
            method1,
            method2
        }
    }
}

export {Abstract}