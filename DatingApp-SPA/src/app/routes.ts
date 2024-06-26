import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberDetailsResolver } from './_resolver/member-detail.resolver';
import { MemberListDetailsResolver } from './_resolver/member-list-detail.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard] , children: [
        {path: 'members', component: MemberListComponent,
                resolve: {users: MemberListDetailsResolver}},
        {path: 'members/:id', component: MemberDetailsComponent,
                resolve: {user: MemberDetailsResolver}},
        {path: 'member/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver},
                canDeactivate: [PreventUnsavedChanges]},
        {path: 'list', component: ListsComponent},
        {path: 'messages', component: MessagesComponent}
    ]},
    {path: '**', redirectTo: '', pathMatch: 'full'}
]


