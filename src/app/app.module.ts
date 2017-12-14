import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ActiveChatComponent } from './components/active-chat/active-chat.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { PostToActiveChatComponent } from './components/post-to-active-chat/post-to-active-chat.component';


@NgModule({
  declarations: [
    AppComponent,
    ActiveChatComponent,
    ActiveUsersComponent,
    PostToActiveChatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }