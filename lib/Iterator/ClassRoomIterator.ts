import {Iterator} from './Iterator';
import {ClassRoom} from './ClassRoom';

class ClassRoomIterator implements Iterator {
    private classRoom: ClassRoom;
    private index: number = 0;

    constructor(classRoom: ClassRoom) {
        this.classRoom = classRoom;
    }

    hasNext() {
        if(this.index < this.classRoom.getLength()) {
            return true;
        } else {
            return false;
        }
    }

    next() {
        const student = this.classRoom.getStudentAt(this.index);
        this.index++;
        return student;
    }
}

export {ClassRoomIterator}