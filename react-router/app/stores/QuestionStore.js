import BaseStore from './BaseStore';
import QuestionConstants from '../constants/QuestionConstants';

class QuestionStore extends BaseStore {

    emitChange() {
        this.emit(QUESTIONS_CHANGED);
    }

    addChangeListener(callback) {
        this.on(QUESTIONS_CHANGED, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(QUESTION_CHANGED, callback);
    }

    toggleFeatured(id) {
        var question = getAll().filter(question => question.id === id);
        if(question.length === 1) {
            question[0].isFeatured = true;
            emitChange();
        }
    }
}

let store = new QuestionStore();

store.setAll([
    {
        id: 1
        title: 'How to center div vertically using CSS?',
        content: 'I have no idea how could I center the div using CSS vertically. No JS, please!',
        tags: ['css', 'flexbox'],
        author: 'Konrad',
        date: new Date(),
        isFeatured: false
    },
      {
        id: 2
        title: 'What is better - Scala or Groovy?',
        content: 'I wonder which language is better? I do not expect any constructive critisism, let the flamewar start!',
        tags: ['scala', 'groovy', 'jvm', 'flamewar'],
        author: 'Anne',
        date: new Date(),
        isFeatured: true
    }
]);

export default store;
