import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent>{
   canDeactivate(component: MemberEditComponent) {
    if (component.editform.dirty) {
        return confirm('Voulez vous vraiment quitter ? Vous avez des modifications non sauvegardées !!');
    }
    return true;
} 
}

