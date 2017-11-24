import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PosttodoComponent } from './posttodo/posttodo.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';

import { UserService } from './user.service';
import { PostsTodosService } from './posts-todos.service';

export function RestangularConfigFactory(RestangularProvider){
  RestangularProvider.setBaseUrl('https://jsonplaceholder.typicode.com/');
  RestangularProvider.setPlainByDefault(true);
}

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PosttodoComponent,
    EditComponent,
    AddComponent,
    DeleteComponent,
    PosttodoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RestangularModule.forRoot(RestangularConfigFactory),
    AppRoutingModule,
    RouterModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [
    UserService,
    PostsTodosService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ AddComponent, EditComponent, DeleteComponent ],
})
export class AppModule {

}
