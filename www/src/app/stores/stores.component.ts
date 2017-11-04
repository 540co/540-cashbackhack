import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
  public stores:any = [
    {
      affiliatizerEnabled: true,
      domainName: "bonobos.com",
      matchPattern: ".*bonobos.com.*",
      shoppingURL: "/bonobos.com_13531-xfas?AutoLoginID=%autologinid%",
      storeId: 13531,
      storeName: "Bonobos",
      images: {
        largeLogo: "https://static.ebates.com/img/merchant_logo/13531/bonobos_icon_150x40.gif",
        smallLogo: "https://static.ebates.com/img/merchant_logo/13531/bonobos_icon_100x27.gif",
        "logo-email": "https://static.ebates.com/img/merchant_logo/13531/bonobos_icon_280x60.gif"
      }
    },
    {
      activationCode: 3,
      affiliatizerEnabled: false,
      domainName: "la-z-boy.com",
      matchPattern: ".*la-z-boy.com.*",
      shoppingURL: "/la-z-boy.com_13484-xfas?AutoLoginID=%autologinid%",
      storeId: 13484,
      storeName: "La-Z-Boy",
      creditCardCB: 3,
      images: {
        largeLogo: "https://static.ebates.com/img/merchant_logo/13484/la_z_boy_icon_150x40.gif",
        smallLogo: "https://static.ebates.com/img/merchant_logo/13484/la_z_boy_icon_100x27.gif",
        "logo-email": "https://static.ebates.com/img/merchant_logo/13484/la_z_boy_icon_280x60.gif"
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
