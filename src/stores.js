import { writable, derived } from 'svelte/store';
import { questions } from './quizes';

export const score = writable(0);
export const player_name = writable('');
export const player_data = writable({});
export const total_questions = questions.length;
export const answered_count = derived(player_data, ($player_data) => Object.keys($player_data).length);
export const correct_answers = derived(player_data, ($player_data) => {
    let obj = {};
    Object.keys($player_data).forEach(id => {
        const question = questions.find(q => q.id == id);
        if (question) {
            obj[id] = $player_data[id] == question.answer;
            // console.log(id, $player_data[id], question.answer, obj[id])
        } else {
            obj[id] = false;
        }
    });
    // console.log(obj)
    return obj;
});