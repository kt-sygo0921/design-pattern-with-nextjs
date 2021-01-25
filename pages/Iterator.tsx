import Layout from '../components/Layout';
import {ClassRoom} from '../lib/Iterator/ClassRoom';
import {Student} from '../lib/Iterator/Student';

const Iterator = () => {
    const classRoom = new ClassRoom();
    classRoom.appendStudent(new Student('田中'));
    classRoom.appendStudent(new Student('山田'));
    classRoom.appendStudent(new Student('鈴木'));
    classRoom.appendStudent(new Student('佐藤'));

    const iterator = classRoom.iterator();

    let renderStudent = [];
    while(iterator.hasNext()) {
        const student = iterator.next();
        renderStudent.push(student.getName())
    }
    return (
        <Layout>
            <ul>
                {renderStudent.map(student => (
                    <li key={student}>{student}</li>
                ))}
            </ul>
        </Layout>
    )
}

export default Iterator;
