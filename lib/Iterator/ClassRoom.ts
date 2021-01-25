import {Aggregate} from './Aggregate';
import { Student } from './Student';
import {ClassRoomIterator} from './ClassRoomIterator';

class ClassRoom implements Aggregate {
    private students: Student[] = [];

    getStudentAt(index: number) {
        return this.students[index]
    }

    appendStudent(student: Student) {
        this.students.push(student);
    }
    
    getLength() {
        return this.students.length
    }

    iterator() {
        return new ClassRoomIterator(this);
    }
}

export {ClassRoom}