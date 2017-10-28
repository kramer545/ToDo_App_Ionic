 let fixture = null;
  let instance = null;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [MyComponent],
      providers: [
        App, Platform, Form, Keyboard, MenuController, NavController,
        {provide: Config, useFactory: () => ConfigMock.instance()},
      ],
      imports: [
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(MyComponent);
      instance = fixture;
      fixture.detectChanges();
    });
  }));
  
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Storage } from '@ionic/Storage'; //used to store data
import {IonicStorageModule} from '@ionic/Storage';
import 'rxjs/add/operator/map';

//import md5 = require('js-md5');
import * as md5 from 'js-md5';


function helloWorld() {
  return 'FUCK';
}

describe('Hello world', function () {
  it('says hello', function () {
    expect(helloWorld()).toEqual('Hello world!');
  });
});
