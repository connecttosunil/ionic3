import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';
import {Facebook} from '@ionic-native/facebook';
import {MyApp} from "./app.component";
import {SettingsPage} from "../pages/settings/settings";
import {HomePage} from "../pages/home/home";
import {ResetpasswordPage} from "../pages/resetpassword/resetpassword";
import {ChangepasswordPage} from "../pages/changepassword/changepassword";
import {dashboard} from "../pages/dashboard/dashboard";
import {LoginPage} from "../pages/login/login";
import {BlogDetailPage} from "../pages/blog-detail/blog-detail";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {AboutPage} from "../pages/about/about";
import {DoggalleryPage} from "../pages/doggallery/doggallery";
import {ActivityPage} from "../pages/activity/activity";
import {BlogsPage} from "../pages/blogs/blogs";
import {FindPage} from "../pages/find/find";
import {MessagePage} from "../pages/message/message";
import {DogDetailPage} from "../pages/dog-detail/dog-detail";
import {MyProfilePage} from "../pages/my-profile/my-profile";
import {MyDogsPage} from "../pages/my-dogs/my-dogs";
import {AddYourDogPage} from "../pages/add-your-dog/add-your-dog";
import {AddDogPicsPage} from "../pages/add-dog-pics/add-dog-pics";
import {PersonalInfoEditPage} from "../pages/personal-info-edit/personal-info-edit";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {ChatPage} from "../pages/chat/chat";
import {PasswordChangePage} from "../pages/password-change/password-change";
import {ProfilePicturePage} from "../pages/profile-picture/profile-picture";
import {UpdateProfilePage} from "../pages/update-profile/update-profile";
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Base64 } from '@ionic-native/base64';
import { ReactiveFormsModule } from '@angular/forms';
import { AndroidPermissions } from '@ionic-native/android-permissions';
@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    HomePage,
    dashboard,
    LoginPage,
    NotificationsPage,
    RegisterPage,
    MyProfilePage,
    PersonalInfoEditPage,
    DoggalleryPage,
    AboutPage,
    ActivityPage,
    BlogsPage,
    UpdateProfilePage,
    FindPage,
    MessagePage,
    AddYourDogPage,
    AddDogPicsPage,
    DogDetailPage,
    ProfilePicturePage,
    ChatPage,
    PasswordChangePage,
	   ResetpasswordPage,
     ChangepasswordPage,
     MyDogsPage,
     BlogDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
	ReactiveFormsModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    HomePage,
    dashboard,
    LoginPage,
    NotificationsPage,
    RegisterPage,
    MyProfilePage,
    PersonalInfoEditPage,
    AboutPage,
    ActivityPage,
    BlogsPage,
    DoggalleryPage,
    UpdateProfilePage,
    FindPage,
    MessagePage,
    AddYourDogPage,
    AddDogPicsPage,
    DogDetailPage,
    ProfilePicturePage,
    ChatPage,
    PasswordChangePage,
	ResetpasswordPage,
  ChangepasswordPage,
  MyDogsPage,
  BlogDetailPage
  ],
  providers: [
    StatusBar,
    Facebook,
    AndroidPermissions,
    SplashScreen,
     Keyboard,
    Camera,FileTransfer,ImagePicker,Base64,File,
		Crop,
    { provide: ErrorHandler, useClass: IonicErrorHandler
    },   AuthServiceProvider,

  ],

})

export class AppModule {

}
