import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberDetailsResolver } from './_resolver/member-detail.resolver';
import { MemberListDetailsResolver } from './_resolver/member-list-detail.resolver';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard] , children: [
        {path: 'members', component: MemberListComponent,
        resolve: {users: MemberListDetailsResolver}},
        {path: 'members/:id', component: MemberDetailsComponent,
                resolve: {user: MemberDetailsResolver}},
        {path: 'list', component: ListsComponent},
        {path: 'messages', component: MessagesComponent}
    ]},
    {path: '**', redirectTo: '', pathMatch: 'full'}
]


