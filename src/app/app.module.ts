import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { RestangularModule, Restangular } from 'ngx-restangular';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { PostsTodosComponent } from './posts-todos/posts-todos.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

export function RestangularConfigFactory(RestangularProvider){
  RestangularProvider.setBaseUrl('https://jsonplaceholder.typicode.com/');
}

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsTodosComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RestangularModule.forRoot(RestangularConfigFactory),
    AppRoutingModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ AddComponent, EditComponent ],
})
export class AppModule {

}
