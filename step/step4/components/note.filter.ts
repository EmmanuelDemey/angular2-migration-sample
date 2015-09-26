/// <reference path="../typings/angular2/angular2.d.ts" />
import {PipeTransform, Pipe} from 'angular2/angular2'

@Pipe({
	name: 'NoteFilter'	
})
export class NoteFilter implements PipeTransform{ 
	transform(value:number):string{
		return value > 3 ? 'glyphicon glyphicon-heart' : '';
	}
}