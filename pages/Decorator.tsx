import Layout from '../components/Layout';
import {ConcreateComponent} from '../lib/Decorator/ConcreateComponent';
import {ConcreateComponentA} from '../lib/Decorator/ConcreateComponentA';
import {ConcreateComponentB} from '../lib/Decorator/ConcreateComponentB';
import {ConcreateComponentC} from '../lib/Decorator/ConcreateComponentC';

const Decorator = () => {
    const component = new ConcreateComponent();
    const componentA = new ConcreateComponentA(component);
    const componentB = new ConcreateComponentB(componentA);
    const componentC = new ConcreateComponentC(component);
    return (
        <Layout>
            <p>ConcreateComponent</p>
            <ul>
                <li>{component.method1()}</li>
                <li>{component.method2()}</li>
            </ul>

            <p>ConcreateComponentA</p>
            <ul>
                <li>{componentA.method1()}</li>
                <li>{componentA.method2()}</li>
            </ul>

            <p>ConcreateComponentB</p>
            <ul>
                <li>{componentB.method1()}</li>
                <li>{componentB.method2()}</li>
            </ul>

            <p>ConcreateComponentC</p>
            <ul>
                <li>{componentC.method1()}</li>
                <li>{componentC.method2()}</li>
            </ul>
        </Layout>
    )
}

export default Decorator;
