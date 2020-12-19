import Layout from '../components/Layout';
import {TemplateMethodClient} from '../lib/TempleteMethod/Client';

const TemplateMethod = () => {
    const Client = new TemplateMethodClient();
    return (
        <Layout>
            <p>ClassA</p>
            <ul>
                <li>{Client.main()}</li>
            </ul>
        </Layout>
    )
}

export default TemplateMethod;
