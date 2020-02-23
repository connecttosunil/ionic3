import { Component, ViewChild } from "@angular/core";
import { Platform, Nav,AlertController, LoadingController } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
//import {MyProfilePage} from "../pages/my-profile/my-profile";
import {ProfilePicturePage} from "../pages/profile-picture/profile-picture";
// import { HomePage } from "../pages/home/home";
import { dashboard } from "../pages/dashboard/dashboard";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { App } from 'ionic-angular';
import {PasswordChangePage} from "../pages/password-change/password-change";
import { AndroidPermissions } from '@ionic-native/android-permissions';
export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  public avatar: any;
    public displayname: any;
    responseData : any;
    public avatarImg: any;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public authService:AuthServiceProvider,
    public forgotCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public fb: Facebook,
    public app: App,
    public androidPermissions: AndroidPermissions
  ) {
    this.initializeApp();
    this.requestWritePermissions();
    //this.avatar = localStorage.getItem('avatar');
    //this.displayname = localStorage.getItem('displayname');
    this.appMenuItems = [
      {title: 'dashboard', component: dashboard, icon: 'dashboard'}

    ];
  }

requestWritePermissions() {
      //this.log.info("requestWritePermissions");
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(result => {
        //this.log.info("Has permission?", result.hasPermission);
        if (!result.hasPermission) {
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
        }
      }, err => {
      //  this.log.error("err requestWritePermissions", err);
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
      }
      );
    }



//initializeApp
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      this.avatar = localStorage.getItem('avatar');
      this.displayname = localStorage.getItem('displayname');
      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();
      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.platform.registerBackButtonAction(() => {
        // Catches the active view
        let nav = this.app.getActiveNavs()[0];
        let activeView = nav.getActive();
        // Checks if can go back before show up the alert
        if(activeView.name === 'dashboard') {console.log(activeView.name);
            if (nav.canGoBack()){
                nav.pop();
            } else {console.log("hii");
                const alert = this.forgotCtrl.create({
                    title: 'Oops, App termination',
                    message: 'Do you want to close the app?',
                    buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                          this.nav.setRoot('dashboard');
                          console.log('** Saída do App Cancelada! **');
                        }
                    },{
                        text: 'Good by doggy dating for to day',
                        handler: () => {
                          this.logout();
                          this.platform.exitApp();
                        }
                    }]
                });
                alert.present();
            }
        }
    });

      //*** Control Keyboard
      //this.keyboard.disableScroll(true);
    });
  }

  //Get user profile pic when goes to dashbaord
  getUserProfilePicture () {
  let loading = this.loadingCtrl.create({
    content: "uploading photo, please wait..."
   });
  this.authService.getProfilePicture(localStorage.getItem('userId')).then((result) => {
  this.responseData = result;

  console.log(this.responseData.status);
  if(this.responseData.status == 'ok'){
    console.log(this.responseData);
    console.log(this.responseData.data.image);
    this.avatarImg = this.responseData.data.image;
    loading.dismissAll();
    console.log("controller profile ts");
    console.log(this.responseData.data.image);
    this.nav.push(dashboard, {profilePic: this.responseData.data.image} );

  }
  else{
    loading.dismissAll();
   let alert = this.forgotCtrl.create({
    title: 'Something went wrong..',
    subTitle: this.responseData.error,
    buttons: ['Dismiss']
  });
  alert.present();
   }
}, (err) => {
  //console.log(err.status);
  loading.dismissAll();
 let alert = this.forgotCtrl.create({
  title: 'Something went wrong..',
  subTitle: err.error,
  buttons: ['Dismiss']
});
alert.present();
  // Error log
});

}


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
//clear app session on logout
  logout() {
   this.fb.logout().then(() => {
     localStorage.setItem('userId',"");
     localStorage.setItem('displayname',"");
     localStorage.setItem('userCookie',"");
     localStorage.clear();
     this.nav.setRoot(LoginPage);
   }).catch(() => { });

    localStorage.setItem('userId',"");
    localStorage.setItem('avatar',"");
    localStorage.setItem('displayname',"");
    localStorage.setItem('userCookie',"");
    localStorage.setItem('newDogId',"");
    localStorage.clear();
    this.nav.setRoot(LoginPage);

  }
  goChangePassword() {
  this.nav.push(PasswordChangePage);
  }
  addprofilepic() {
  this.nav.push(ProfilePicturePage);
  }

}
