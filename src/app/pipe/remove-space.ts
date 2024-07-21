import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'removeSpace'
})
export class RemoveSpacePipe implements PipeTransform {
    transform(name: string) {
        return name.replace(/\s/g, "");
    }
}