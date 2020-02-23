import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingController } from 'ionic-angular';
import {DogDetailPage} from "../dog-detail/dog-detail";

/**
 * Generated class for the FindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find',
  templateUrl: 'find.html',
})

export class FindPage {
  responseData : any;
  private _isPreloader: boolean = true;
  private _lastRecord: any;
  private   pageCount: any;
  private _totalRecord: any;
  public recordCount: number;
  private disableLoadEvent:any;	
  private noMoreRecords:any;
  private loading:any;
	
  
  dogData = {"pageCount":1,"Breed":"", "color":"", "dog_age":"", "Maturity":"", "Gender":"", "Country":"", "State":"", "Zip":"", "Lookingfor":"","search":"" };

  public dog_age = {  age: '1990-02-19', timeStarts: '07:43',  timeEnds: '1990-02-20'  };

  showMyContainer: boolean = false;


  constructor(public nav: NavController,public forgotCtrl: AlertController,public authService:AuthServiceProvider,private loadingCtrl: LoadingController, public navParams: NavParams) {
    this.initializeCountry();
    this.initializeBreed();
	this.pageCount = 1;
    this.recordCount = 0;  
    //this.loadDogs();
    this.loadData('');
    for (let i = 0; i < 2; i++) {
      this.items.push( this.items.length );
    }

  }


public dogAge = { 'age': '1990-02-19', 'timeStarts': '07:43', 'timeEnds': '1990-02-20'  };

  goToDOGdETAILPage(dogId){
    this.nav.push(DogDetailPage,{dogId:dogId});
  }


    //search dog filters
   loadDogs() {
     let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
     this.authService.getAllDogs(this.dogData).then((result) => {
     this.responseData = result;
     if(this.responseData.status == 'ok'){
     loading.dismissAll();
        this.searchData = this.responseData.data;
     }
     }, (err) => {
     loading.dismissAll();
      let alert = this.forgotCtrl.create({
       title: 'Error',
       subTitle: 'Something went wrong !!',
       buttons: ['Dismiss']
     });
     alert.present();
     });
   }

  public breed: any[];
  public country: any[];
  public selectedState: any[];
  public searchData: any[];
  inputState='1';


  items = [];

  /*doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 2; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  } */

  initializeCountry(){
    this.country = [
      {id:"AX", name: "Åland Islands"},
                                                    {id:"AF", name: "Afghanistan"},
                                                    {id:"AL", name: "Albania"},
                                                    {id:"DZ", name: "Algeria"},
                                                    {id:"AS", name: "American Samoa"},
                                                    {id:"AD", name: "Andorra"},
                                                    {id:"AO", name: "Angola"},
                                                    {id:"AI", name: "Anguilla"},
                                                    {id:"AQ", name: "Antarctica"},
                                                    {id:"AG", name: "Antigua and Barbuda"},
                                                    {id:"AR", name: "Argentina"},
                                                    {id:"AM", name: "Armenia"},
                                                    {id:"AW", name: "Aruba"},
                                                    {id:"AU", name: "Australia"},
                                                    {id:"AT", name: "Austria"},
                                                    {id:"AZ", name: "Azerbaijan"},
                                                    {id:"BS", name: "Bahamas"},
                                                    {id:"BH", name: "Bahrain"},
                                                    {id:"BD", name: "Bangladesh"},
                                                    {id:"BB", name: "Barbados"},
                                                    {id:"BY", name: "Belarus"},
                                                    {id:"PW", name: "Belau"},
                                                    {id:"BE", name: "Belgium"},
                                                    {id:"BZ", name: "Belize"},
                                                    {id:"BJ", name: "Benin"},
                                                    {id:"BM", name: "Bermuda"},
                                                    {id:"BT", name: "Bhutan"},
                                                    {id:"BO", name: "Bolivia"},
                                                    {id:"BQ", name: "Bonaire, Saint Eustatius and Saba"},
                                                    {id:"BA", name: "Bosnia and Herzegovina"},
                                                    {id:"BW", name: "Botswana"},
                                                    {id:"BV", name: "Bouvet Island"},
                                                    {id:"BR", name: "Brazil"},
                                                    {id:"IO", name: "British Indian Ocean Territory"},
                                                    {id:"BN", name: "Brunei"},
                                                    {id:"BG", name: "Bulgaria"},
                                                    {id:"BF", name: "Burkina Faso"},
                                                    {id:"BI", name: "Burundi"},
                                                    {id:"KH", name: "Cambodia"},
                                                    {id:"CM", name: "Cameroon"},
                                                    {id:"CA", name: "Canada"},
                                                    {id:"CV", name: "Cape Verde"},
                                                    {id:"KY", name: "Cayman Islands"},
                                                    {id:"CF", name: "Central African Republic"},
                                                    {id:"TD", name: "Chad"},
                                                    {id:"CL", name: "Chile"},
                                                    {id:"CN", name: "China"},
                                                    {id:"CX", name: "Christmas Island"},
                                                    {id:"CC", name: "Cocos (Keeling) Islands"},
                                                    {id:"CO", name: "Colombia"},
                                                    {id:"KM", name: "Comoros"},
                                                    {id:"CG", name: "Congo (Brazzaville)"},
                                                    {id:"CD", name: "Congo (Kinshasa)"},
                                                    {id:"CK", name: "Cook Islands"},
                                                    {id:"CR", name: "Costa Rica"},
                                                    {id:"HR", name: "Croatia"},
                                                    {id:"CU", name: "Cuba"},
                                                    {id:"CW", name: "Curaçao"},
                                                    {id:"CY", name: "Cyprus"},
                                                    {id:"CZ", name: "Czech Republic"},
                                                    {id:"DK", name: "Denmark"},
                                                    {id:"DJ", name: "Djibouti"},
                                                    {id:"DM", name: "Dominica"},
                                                    {id:"DO", name: "Dominican Republic"},
                                                    {id:"EC", name: "Ecuador"},
                                                    {id:"EG", name: "Egypt"},
                                                    {id:"SV", name: "El Salvador"},
                                                    {id:"GQ", name: "Equatorial Guinea"},
                                                    {id:"ER", name: "Eritrea"},
                                                    {id:"EE", name: "Estonia"},
                                                    {id:"ET", name: "Ethiopia"},
                                                    {id:"FK", name: "Falkland Islands"},
                                                    {id:"FO", name: "Faroe Islands"},
                                                    {id:"FJ", name: "Fiji"},
                                                    {id:"FI", name: "Finland"},
                                                    {id:"FR", name: "France"},
                                                    {id:"GF", name: "French Guiana"},
                                                    {id:"PF", name: "French Polynesia"},
                                                    {id:"TF", name: "French Southern Territories"},
                                                    {id:"GA", name: "Gabon"},
                                                    {id:"GM", name: "Gambia"},
                                                    {id:"GE", name: "Georgia"},
                                                    {id:"DE", name: "Germany"},
                                                    {id:"GH", name: "Ghana"},
                                                    {id:"GI", name: "Gibraltar"},
                                                    {id:"GR", name: "Greece"},
                                                    {id:"GL", name: "Greenland"},
                                                    {id:"GD", name: "Grenada"},
                                                    {id:"GP", name: "Guadeloupe"},
                                                    {id:"GU", name: "Guam"},
                                                    {id:"GT", name: "Guatemala"},
                                                    {id:"GG", name: "Guernsey"},
                                                    {id:"GN", name: "Guinea"},
                                                    {id:"GW", name: "Guinea-Bissau"},
                                                    {id:"GY", name: "Guyana"},
                                                    {id:"HT", name: "Haiti"},
                                                    {id:"HM", name: "Heard Island and McDonald Islands"},
                                                    {id:"HN", name: "Honduras"},
                                                    {id:"HK", name: "Hong Kong"},
                                                    {id:"HU", name: "Hungary"},
                                                    {id:"IS", name: "Iceland"},
                                                    {id:"IN", name: "India"},
                                                    {id:"ID", name: "Indonesia"},
                                                    {id:"IR", name: "Iran"},
                                                    {id:"IQ", name: "Iraq"},
                                                    {id:"IE", name: "Ireland"},
                                                    {id:"IM", name: "Isle of Man"},
                                                    {id:"IL", name: "Israel"},
                                                    {id:"IT", name: "Italy"},
                                                    {id:"CI", name: "Ivory Coast"},
                                                    {id:"JM", name: "Jamaica"},
                                                    {id:"JP", name: "Japan"},
                                                    {id:"JE", name: "Jersey"},
                                                    {id:"JO", name: "Jordan"},
                                                    {id:"KZ", name: "Kazakhstan"},
                                                    {id:"KE", name: "Kenya"},
                                                    {id:"KI", name: "Kiribati"},
                                                    {id:"KW", name: "Kuwait"},
                                                    {id:"KG", name: "Kyrgyzstan"},
                                                    {id:"LA", name: "Laos"},
                                                    {id:"LV", name: "Latvia"},
                                                    {id:"LB", name: "Lebanon"},
                                                    {id:"LS", name: "Lesotho"},
                                                    {id:"LR", name: "Liberia"},
                                                    {id:"LY", name: "Libya"},
                                                    {id:"LI", name: "Liechtenstein"},
                                                    {id:"LT", name: "Lithuania"},
                                                    {id:"LU", name: "Luxembourg"},
                                                    {id:"MO", name: "Macao S.A.R., China"},
                                                    {id:"MG", name: "Madagascar"},
                                                    {id:"MW", name: "Malawi"},
                                                    {id:"MY", name: "Malaysia"},
                                                    {id:"MV", name: "Maldives"},
                                                    {id:"ML", name: "Mali"},
                                                    {id:"MT", name: "Malta"},
                                                    {id:"MH", name: "Marshall Islands"},
                                                    {id:"MQ", name: "Martinique"},
                                                    {id:"MR", name: "Mauritania"},
                                                    {id:"MU", name: "Mauritius"},
                                                    {id:"YT", name: "Mayotte"},
                                                    {id:"MX", name: "Mexico"},
                                                    {id:"FM", name: "Micronesia"},
                                                    {id:"MD", name: "Moldova"},
                                                    {id:"MC", name: "Monaco"},
                                                    {id:"MN", name: "Mongolia"},
                                                    {id:"ME", name: "Montenegro"},
                                                    {id:"MS", name: "Montserrat"},
                                                    {id:"MA", name: "Morocco"},
                                                    {id:"MZ", name: "Mozambique"},
                                                    {id:"MM", name: "Myanmar"},
                                                    {id:"NA", name: "Namibia"},
                                                    {id:"NR", name: "Nauru"},
                                                    {id:"NP", name: "Nepal"},
                                                    {id:"NL", name: "Netherlands"},
                                                    {id:"NC", name: "New Caledonia"},
                                                    {id:"NZ", name: "New Zealand"},
                                                    {id:"NI", name: "Nicaragua"},
                                                    {id:"NE", name: "Niger"},
                                                    {id:"NG", name: "Nigeria"},
                                                    {id:"NU", name: "Niue"},
                                                    {id:"NF", name: "Norfolk Island"},
                                                    {id:"KP", name: "North Korea"},
                                                    {id:"MK", name: "North Macedonia"},
                                                    {id:"MP", name: "Northern Mariana Islands"},
                                                    {id:"NO", name: "Norway"},
                                                    {id:"OM", name: "Oman"},
                                                    {id:"PK", name: "Pakistan"},
                                                    {id:"PS", name: "Palestinian Territory"},
                                                    {id:"PA", name: "Panama"},
                                                    {id:"PG", name: "Papua New Guinea"},
                                                    {id:"PY", name: "Paraguay"},
                                                    {id:"PE", name: "Peru"},
                                                    {id:"PH", name: "Philippines"},
                                                    {id:"PN", name: "Pitcairn"},
                                                    {id:"PL", name: "Poland"},
                                                    {id:"PT", name: "Portugal"},
                                                    {id:"PR", name: "Puerto Rico"},
                                                    {id:"QA", name: "Qatar"},
                                                    {id:"RE", name: "Reunion"},
                                                    {id:"RO", name: "Romania"},
                                                    {id:"RU", name: "Russia"},
                                                    {id:"RW", name: "Rwanda"},
                                                    {id:"ST", name: "São Tomé and Príncipe"},
                                                    {id:"BL", name: "Saint Barthélemy"},
                                                    {id:"SH", name: "Saint Helena"},
                                                    {id:"KN", name: "Saint Kitts and Nevis"},
                                                    {id:"LC", name: "Saint Lucia"},
                                                    {id:"SX", name: "Saint Martin (Dutch part)"},
                                                    {id:"MF", name: "Saint Martin (French part)"},
                                                    {id:"PM", name: "Saint Pierre and Miquelon"},
                                                    {id:"VC", name: "Saint Vincent and the Grenadines"},
                                                    {id:"WS", name: "Samoa"},
                                                    {id:"SM", name: "San Marino"},
                                                    {id:"SA", name: "Saudi Arabia"},
                                                    {id:"SN", name: "Senegal"},
                                                    {id:"RS", name: "Serbia"},
                                                    {id:"SC", name: "Seychelles"},
                                                    {id:"SL", name: "Sierra Leone"},
                                                    {id:"SG", name: "Singapore"},
                                                    {id:"SK", name: "Slovakia"},
                                                    {id:"SI", name: "Slovenia"},
                                                    {id:"SB", name: "Solomon Islands"},
                                                    {id:"SO", name: "Somalia"},
                                                    {id:"ZA", name: "South Africa"},
                                                    {id:"GS", name: "South Georgia/Sandwich Islands"},
                                                    {id:"KR", name: "South Korea"},
                                                    {id:"SS", name: "South Sudan"},
                                                    {id:"ES", name: "Spain"},
                                                    {id:"LK", name: "Sri Lanka"},
                                                    {id:"SD", name: "Sudan"},
                                                    {id:"SR", name: "Suriname"},
                                                    {id:"SJ", name: "Svalbard and Jan Mayen"},
                                                    {id:"SZ", name: "Swaziland"},
                                                    {id:"SE", name: "Sweden"},
                                                    {id:"CH", name: "Switzerland"},
                                                    {id:"SY", name: "Syria"},
                                                    {id:"TW", name: "Taiwan"},
                                                    {id:"TJ", name: "Tajikistan"},
                                                    {id:"TZ", name: "Tanzania"},
                                                    {id:"TH", name: "Thailand"},
                                                    {id:"TL", name: "Timor-Leste"},
                                                    {id:"TG", name: "Togo"},
                                                    {id:"TK", name: "Tokelau"},
                                                    {id:"TO", name: "Tonga"},
                                                    {id:"TT", name: "Trinidad and Tobago"},
                                                    {id:"TN", name: "Tunisia"},
                                                    {id:"TR", name: "Turkey"},
                                                    {id:"TM", name: "Turkmenistan"},
                                                    {id:"TC", name: "Turks and Caicos Islands"},
                                                    {id:"TV", name: "Tuvalu"},
                                                    {id:"UG", name: "Uganda"},
                                                    {id:"UA", name: "Ukraine"},
                                                    {id:"AE", name: "United Arab Emirates"},
                                                    {id:"GB", name: "United Kingdom (UK)"},
                                                    {id:"US", name: "United States (US)"},
                                                    {id:"UM", name: "United States (US) Minor Outlying Islands"},
                                                    {id:"UY", name: "Uruguay"},
                                                    {id:"UZ", name: "Uzbekistan"},
                                                    {id:"VU", name: "Vanuatu"},
                                                    {id:"VA", name: "Vatican"},
                                                    {id:"VE", name: "Venezuela"},
                                                    {id:"VN", name: "Vietnam"},
                                                    {id:"VG", name: "Virgin Islands (British)"},
                                                    {id:"VI", name: "Virgin Islands (US)"},
                                                    {id:"WF", name: "Wallis and Futuna"},
                                                    {id:"EH", name: "Western Sahara"},
                                                    {id:"YE", name: "Yemen"},
                                                    {id:"ZM", name: "Zambia"},
                                                    {id:"ZW", name: "Zimbabwe"},
    ];
    }

  setStateValues(scountry) {
        // this.selectedState = this.districts.filter(district => district.inputStatestate_id == sState.id)
        let loading = this.loadingCtrl.create({
          content: "Please wait..."
        });
           loading.present();
        this.authService.get_state(scountry).then((result) => {
        loading.dismissAll();
          this.responseData = result;
         if(this.responseData.status == 'ok'){
          if(this.responseData.data.length>0){
          this.selectedState =  JSON.parse(JSON.stringify(this.responseData.data));
          this.inputState='';
        }else{
          this.selectedState = [];
          this.inputState='1';
          this.dogData.State="";
       }
        }else{
        }
        });
     }

  //search dog filters
   searchDogs() {
	  
     let loading = this.loadingCtrl.create({
       content: "Please wait..."
      });

     loading.present();
     this.authService.dogSearchResult(this.dogData).then((result) => {
     this.responseData = result; 
     if(this.responseData.status == 'ok'){
       loading.dismissAll();
        this.searchData = this.responseData.data;
       //console.log(localStorage.getItem('userData'));
     }else{
       loading.dismissAll();
      let alert = this.forgotCtrl.create({
       title: 'Oops! something went wrong..',
       subTitle: this.responseData.error,
       buttons: ['Dismiss']
     });
     alert.present();
     }
     }, (err) => {
       loading.dismissAll();
      let alert = this.forgotCtrl.create({
       title: 'Oops! something went wrong..',
       subTitle: err.error,
       buttons: ['Dismiss']
     });
     alert.present();
     });

	 this.showMyContainer=false;
   }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad FindPage');
  }

  public loadData(infiniteScroll) { 
      
	  if(infiniteScroll == ''){
    this.searchData = []; 
		this.pageCount = 1;  

    this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present(); 
	  } 
    setTimeout(() => {  		
		this.dogData.pageCount =  this.pageCount;
		this.authService.getAllDogs(this.dogData).then((result) => {
    this.responseData = result;
    if(infiniteScroll == ''){
      this.loading.dismissAll();    
    }
    if(this.responseData.status == 'ok'){
     this.showMyContainer=false;
		 this.responseData = result;	
      if(this.searchData){   
        for (let dogList of this.responseData.data) {
		 this.searchData.push(dogList);	
         this.recordCount++;
        }
        }else{
        this.searchData = this.responseData.data;
        }
        //event.target.complete();
        if( this.responseData.data.length == 0 && infiniteScroll != ''){
           // this.disableLoadEvent = event.target.disabled;
            this.disableLoadEvent = true;
            this.noMoreRecords = true;
        }
        }else{
            let alert = this.forgotCtrl.create({
             title: 'Oops! something went wrong..',
             subTitle: this.responseData.error,
             buttons: ['Dismiss']
           });
           alert.present();
        }
      });
     this.pageCount++; 
     if(infiniteScroll != ''){       
	  infiniteScroll.complete();	
    }
    }, 500); 
  }

// select breed

initializeBreed(){
  this.breed = [
    {id:"1", name: "Affenpinscher"},
    {id:"2", name: "Afghan Hound"},
    {id:"3", name: "Airedale Terrier"},
    {id:"4", name: "Akita Inu"},
    {id:"5", name: "Alaskan Malamute"},
    {id:"6", name: "Am Staff"},
    {id:"7", name: "American Coonhound"},
    {id:"8", name: "American Eskimo Dog"},
    {id:"9", name: "American Foxhound"},
    {id:"10", name: "American Pit Bull Terrier"},
    {id:"11", name: "American Water Spaniel"},
    {id:"12", name: "Anatolian Shepherd Dog"},
    {id:"13", name: "Australian Cattle"},
    {id:"14", name: "Australian Shepherd"},
    {id:"15", name: "Australian Terrier"},
    {id:"16", name: "Basenji"},
    {id:"17", name: "Basset Hound"},
    {id:"18", name: "Beagle"},
    {id:"19", name: "Bearded Collie"},
    {id:"20", name: "Bedlington Terrier"},
    {id:"21", name: "Belgian Laekenois"},
    {id:"22", name: "Belgian Malinois"},
    {id:"23", name: "Belgian Sheepdog"},
    {id:"24", name: "Belgian Tervuren"},
    {id:"25", name: "Bergamasco"},
    {id:"26", name: "Bernese Mountain Dog"},
    {id:"27", name: "Bichon Frisé"},
    {id:"28", name: "Biewer Terrier"},
    {id:"29", name: "Black &amp; Tan Coonhound"},
    {id:"30", name: "Black Russian Terrier"},
    {id:"31", name: "Bloodhound"},
    {id:"32", name: "Bluetick Coonhound"},
    {id:"33", name: "Boerboel"},
    {id:"34", name: "Border Collie"},
    {id:"35", name: "Border Terrier"},
    {id:"36", name: "Borzoi"},
    {id:"37", name: "Boston Terrier"},
    {id:"38", name: "Bouvier des Flandres"},
    {id:"39", name: "Boxer"},
    {id:"40", name: "Briard"},
    {id:"41", name: "Brittany"},
    {id:"42", name: "Brussels Griffon"},
    {id:"43", name: "Bull Terrier"},
    {id:"44", name: "Bulldog - American"},
    {id:"45", name: "Bullmastiff"},
    {id:"46", name: "Cairn Terrier"},
    {id:"47", name: "Canaan Dog"},
    {id:"48", name: "Cane Corso"},
    {id:"49", name: "Cardigan Welsh Corgi"},
    {id:"50", name: "Carolina Dog"},
    {id:"51", name: "Cavalier King Charles"},
    {id:"52", name: "Cesky Terrier"},
    {id:"53", name: "Chesapeake Bay Retriever"},
    {id:"54", name: "Chihuahua"},
    {id:"55", name: "Chinese Crested"},
    {id:"56", name: "Chinese Shar-Pei"},
    {id:"57", name: "Chinook"},
    {id:"58", name: "Chow Chow"},
    {id:"59", name: "Cirneco dell'Etna"},
    {id:"60", name: "Clumber Spaniel"},
    {id:"61", name: "Cocker Spaniel - American"},
    {id:"62", name: "Cocker Spaniel - English"},
    {id:"63", name: "Collie"},
    {id:"64", name: "Curly-Coated Retriever"},
    {id:"65", name: "Dachshund"},
    {id:"66", name: "Dalmatian"},
    {id:"67", name: "Dandie Dinmont Terrier"},
    {id:"68", name: "Doberman Pinscher"},
    {id:"69", name: "Dogo Argentino"},
    {id:"70", name: "English Bulldog"},
    {id:"71", name: "English Foxhound"},
    {id:"72", name: "English Pointer"},
    {id:"73", name: "English Setter"},
    {id:"74", name: "English Toy Spaniel"},
    {id:"75", name: "Entlebucher Mountain Dog"},
    {id:"76", name: "Field Spaniel"},
    {id:"77", name: "Fila Brasileiro"},
    {id:"78", name: "Finnish Lapphund"},
    {id:"79", name: "Finnish Spitz"},
    {id:"80", name: "Flat Coated Retriever"},
    {id:"81", name: "French Bulldog"},
    {id:"82", name: "German Pinscher"},
    {id:"83", name: "German Shepherd"},
    {id:"84", name: "German Shorthaired Pointer"},
    {id:"85", name: "German Wirehaired Pointer"},
    {id:"86", name: "Giant Schnauzer"},
    {id:"87", name: "Glen of Imaal Terrier"},
    {id:"88", name: "Golden Retriever"},
    {id:"89", name: "Goldendoodle"},
    {id:"90", name: "Gordon Setter"},
    {id:"91", name: "Great Dane"},
    {id:"92", name: "Great Pyrenees"},
    {id:"93", name: "Greater Swiss Mountain Dog"},
    {id:"94", name: "Greyhound"},
    {id:"95", name: "Harrier"},
    {id:"96", name: "Havana Silk Dog"},
    {id:"97", name: "Havanese"},
    {id:"98", name: "Ibizan Hound"},
    {id:"99", name: "Icelandic Sheepdog"},
    {id:"100", name: "Irish Setter"},
    {id:"101", name: "Irish Terrier"},
    {id:"102", name: "Irish Water Spaniel"},
    {id:"103", name: "Irish Wolfhound"},
    {id:"104", name: "Italian Greyhound"},
    {id:"105", name: "Jack Russell Terrier"},
    {id:"106", name: "Japanese Chin"},
    {id:"107", name: "Keeshond"},
    {id:"108", name: "Kerry Blue Terrier"},
    {id:"109", name: "Komondor"},
    {id:"110", name: "Kuvasz"},
    {id:"111", name: "Labradoodle"},
    {id:"112", name: "Labrador Retriever"},
    {id:"113", name: "Lakeland Terrier"},
    {id:"114", name: "Lhasa Apso"},
    {id:"115", name: "Lowchen"},
    {id:"116", name: "Maltese"},
    {id:"117", name: "Manchester Terrier"},
    {id:"118", name: "Mastiff"},
    {id:"119", name: "Miniature Bull Terrier"},
    {id:"120", name: "Miniature Pinscher"},
    {id:"121", name: "Miniature Schnauzer"},
    {id:"122", name: "NAID Breed"},
    {id:"123", name: "Neapolitan Mastiff"},
    {id:"124", name: "Newfoundland"},
    {id:"125", name: "Norfolk Terrier"},
    {id:"126", name: "Norwegian Buhund"},
    {id:"127", name: "Norwegian Elkhound"},
    {id:"128", name: "Norwegian Lundehund"},
    {id:"129", name: "Norwich Terrier"},
    {id:"130", name: "Nova Scotia Duck Tolling"},
    {id:"131", name: "Old English Sheepdog"},
    {id:"132", name: "Otterhound"},
    {id:"133", name: "Papillon"},
    {id:"134", name: "Parson Russell Terrier"},
    {id:"135", name: "Pekingese"},
    {id:"136", name: "Pembroke Welsh Corgi"},
    {id:"137", name: "Peruvian Inca Orchid"},
    {id:"138", name: "Petit Basset Griffon Vendéen"},
    {id:"139", name: "Pharaoh Hound"},
    {id:"140", name: "Plott Hound"},
    {id:"141", name: "Pomeranian"},
    {id:"142", name: "Polish Lowland"},
    {id:"143", name: "Poodle - Standard"},
    {id:"144", name: "Poodle - Toy"},
    {id:"145", name: "Portuguese Podengo Pequeno"},
    {id:"146", name: "Portuguese Water Dog"},
    {id:"147", name: "Pug"},
    {id:"148", name: "Puli"},
    {id:"149", name: "Pumi"},
    {id:"150", name: "Pyrenean Shepherd"},
    {id:"151", name: "Rat Terrier"},
    {id:"152", name: "Redbone Coonhound"},
    {id:"153", name: "Rhodesian Ridgeback"},
    {id:"154", name: "Rottweiler"},
    {id:"155", name: "Saint Bernard"},
    {id:"156", name: "Saluki"},
    {id:"157", name: "Samoyed"},
    {id:"158", name: "Schipperke"},
    {id:"159", name: "Scottish Deerhound"},
    {id:"160", name: "Scottish Terrier"},
    {id:"161", name: "Sealyham Terrier"},
    {id:"162", name: "Shetland Sheepdog"},
    {id:"163", name: "Shiba Inu"},
    {id:"164", name: "Shih Tzu"},
    {id:"165", name: "Siberian Husky"},
    {id:"166", name: "Silky Terrier"},
    {id:"167", name: "Skye Terrier"},
    {id:"168", name: "Sloughi"},
    {id:"169", name: "Smooth Fox Terrier"},
    {id:"170", name: "Soft Coated Wheaten Terrier"},
    {id:"171", name: "Spinone Italiano"},
    {id:"172", name: "Springer Spaniel - English"},
    {id:"173", name: "Staffordshire Bull Terrier"},
    {id:"174", name: "Standard Schnauzer"},
    {id:"175", name: "Sussex Spaniel"},
    {id:"176", name: "Swedish Vallhund"},
    {id:"177", name: "Tibetan Mastiff"},
    {id:"178", name: "Tibetan Spaniel"},
    {id:"179", name: "Tibetan Terrier"},
    {id:"180", name: "Toy Fox Terrier"},
    {id:"181", name: "Treeing Walker Coonhound"},
    {id:"182", name: "Vizsla"},
    {id:"183", name: "Weimaraner"},
    {id:"184", name: "Welsh Springer Spaniel"},
    {id:"185", name: "Welsh Terrier"},
    {id:"186", name: "West Highland White Terrier"},
    {id:"187", name: "Whippet"},
    {id:"188", name: "Wire Fox Terrier"},
    {id:"189", name: "Wirehaired Pointing Griffon"},
    {id:"190", name: " Wirehaired Vizsla"},
    {id:"191", name: "Xoloitzcuintli"},
    {id:"192", name: "Yorkshire Terrier"},
    {id:"195", name: "Other"},
    {id:"194", name: "Boxer-Basenji"},
    {id:"200", name: "Labrador Retriever-Poodle - Standard"},
    {id:"201", name: "American Coonhound-American Foxhound"},
    {id:"202", name: "Belgian Sheepdog-Collie"},
    {id:"203", name: "Beagle-Border Terrier"},
    {id:"204", name: "Rat Terrier-Chihuahua"},
    {id:"205", name: "Cocker Spaniel - American-Poodle - Toy"},
    {id:"206", name: "English Setter-Anatolian Shepherd Dog"},
    {id:"207", name: "Bulldog - American-Dogo Argentino"},
    {id:"208", name: "German Shepherd-Siberian Husky"},
    {id:"209", name: "Australian Shepherd-Border Collie"},
    {id:"210", name: "Australian Shepherd-Labrador Retriever"},
    {id:"211", name: "Wire Fox Terrier-Chihuahua"},
    {id:"212", name: "Samoyed-German Shepherd"},
    {id:"213", name: "Other-Boxer"},
    {id:"214", name: "Papillon-Chihuahua"},
    {id:"215", name: "Border Collie-Labrador Retriever"},
    {id:"216", name: "Border Collie-Labrador Retriever-Border Collie-Labrador Retriever"},
    {id:"217", name: "Affenpinscher-Chihuahua"},
    {id:"218", name: "American Pit Bull Terrier-Boxer"},
    {id:"219", name: "Goldendoodle-Goldendoodle"},
    {id:"220", name: "Labrador Retriever-Rottweiler"},
    {id:"221", name: "Bernese Mountain Dog-Poodle - Standard"},
    {id:"222", name: "Beagle-Cavalier King Charles"},
    {id:"223", name: "Irish Setter-German Shepherd"},
    {id:"224", name: "American Coonhound-American Water Spaniel"},
    {id:"225", name: "German Shepherd-Other"},
    {id:"226", name: "American Pit Bull Terrier-Alaskan Malamute"},
    {id:"227", name: "Shih Tzu-Poodle - Toy"},
    {id:"228", name: "German Shepherd-Collie"},
    {id:"229", name: "Poodle - Toy-Poodle - Toy"},
    {id:"230", name: "Am Staff-Affenpinscher"},
    {id:"231", name: "Mini French Poodle"},
    {id:"232", name: "Shih Tzu-Yorkshire Terrier"},
    {id:"233", name: "Beagle-Basenji"},
    {id:"234", name: "Staffordshire Bull Terrier-Other"},
    {id:"235", name: "Shih Tzu-Yorkshire Terrier-Shih Tzu-Yorkshire Terrier"},
    {id:"236", name: "American Pit Bull Terrier-American Pit Bull Terrier"},
    {id:"237", name: "Belgian Sheepdog-Australian Shepherd"},
    {id:"238", name: "Affenpinscher-Affenpinscher"},
    {id:"239", name: "Maltese-Yorkshire Terrier"},
    {id:"240", name: "Cavalier King Charles-Bichon Frisé"},
    {id:"241", name: "German Shepherd-Border Collie"},
    {id:"242", name: "Boerboel-Rhodesian Ridgeback"},
    {id:"243", name: "American Pit Bull Terrier-Basenji"},
    {id:"244", name: "Mastiff-American Pit Bull Terrier"},
    {id:"245", name: "American Pit Bull Terrier-Border Collie"},
    {id:"246", name: "Beagle-Pug"},
    {id:"247", name: "Chihuahua-Shih Tzu"},
    {id:"248", name: "Afghan Hound-Afghan Hound"},
    {id:"249", name: "Maltese-Maltese"},
    {id:"250", name: "Pomeranian-Siberian Husky"},
    {id:"251", name: "Akita Inu-American Eskimo Dog"},
    {id:"252", name: "Rhodesian Ridgeback-Bullmastiff"},
    {id:"253", name: "Am Staff-Australian Cattle"},
    {id:"254", name: "Staffordshire Bull Terrier-Other-American Pit Bull Terrier-American Pit Bull Terrier"},
    {id:"255", name: "Other-Other"},
    {id:"256", name: "Other-Other-Other-Other"},
    {id:"257", name: "Belgian Malinois-Labrador Retriever"},
    {id:"258", name: "Dachshund-Jack Russell Terrier"},
    {id:"259", name: "Am Staff-Labrador Retriever"},
    {id:"260", name: "Pomeranian-Poodle - Toy"},
    {id:"261", name: "Australian Terrier-Akita Inu"},
    {id:"262", name: "Bichon Frisé-Cavalier King Charles"},
    {id:"263", name: "Shikari"},
  ];
  }




}
