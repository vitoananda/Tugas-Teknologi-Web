import {ValidationErrors,AbstractControl} from '@angular/forms';

export class UsernameValidators{
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf('')>=0)
        return {cannotContainSpace:true};
        return null;
    }
    static shouldBeUnique(control:AbstractControl):Promise<ValidationErrors | null>{
        return new Promise((resolve,reject)=>{
            if(control.value==='polinema')
            resolve({shouldBeUnique:true});
            else resolve(null);
        }, );
         
        }
    }

