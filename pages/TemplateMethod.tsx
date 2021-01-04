import Layout from '../components/Layout';
import { ClassA } from "../lib/TempleteMethod/ClassA";
import { ClassB } from "../lib/TempleteMethod/ClassB";

const TemplateMethod = () => {
    const obj1 = new ClassA();
    const StringA = obj1.operation1();

    const obj2 = new ClassB();
    obj2.operation1();
    const StringB = obj2.operation1();

    return (
        <Layout>
            <p>ClassA</p>
            <ul>
                <li>{StringA.method1}</li>
                <li>{StringA.method2}</li>
            </ul>

            <p>ClassB</p>
            <ul>
                <li>{StringB.method1}</li>
                <li>{StringB.method2}</li>
            </ul>
        </Layout>
    )
}

export default TemplateMethod;
