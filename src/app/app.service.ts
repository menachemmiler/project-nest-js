import { Body, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { User } from 'src/types/models/user';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! + bla bla';
  }

  postHello(): any {
    return { msg: 'postHello' };
  }
}

@Injectable()
export class UserService {
  getUser(): any {
    const data = fs.readFileSync(
      'C:\\Users\\MENACHEM MILER\\programe\\קורס צבא\\קורס יוסי\\nest_js\\data\\user.json',
      'utf-8',
    );
    const all = JSON.parse(data);
    console.log(all); // מדפיס את התוכן לקונסול
    return all; // מחזיר את התוכן מהפונקציה
  }

  postUser(@Body() newUser: User): User {
    const { } = newUser;
    let data = fs.readFileSync(
      'C:\\Users\\MENACHEM MILER\\programe\\קורס צבא\\קורס יוסי\\nest_js\\data\\user.json',
      'utf-8',
    );

    let current = JSON.parse(data);
    current.push(newUser); // מוסיף את המשתמש החדש
    const strCurrent = JSON.stringify(current, null, 2); // מעצב את התוכן ל-JSON

    fs.writeFileSync(
      'C:\\Users\\MENACHEM MILER\\programe\\קורס צבא\\קורס יוסי\\nest_js\\data\\user.json',
      strCurrent,
    );
    return newUser;
  }
}
