import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {
 
  constructor() { }
  checkusernameandpassword(uname: string, pwd : string)
  {
if(uname == "admin" && pwd =="admin123"){
return true;
}
else{
  return false;
}
  }
}