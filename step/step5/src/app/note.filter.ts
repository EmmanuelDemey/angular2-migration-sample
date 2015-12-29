import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'NoteFilter'
})

export class NoteFilter implements PipeTransform {
    transform(value: number) : string {
        return value > 3 ? 'glyphicon glyphicon-heart' : '';
    }
}