import { Args } from './004-end'

try{
    let args: string[] = ["true", "123", "example"];
    
    let arg = new Args("l,#p,d*", args);

    let logging: boolean = arg.getBoolean('l');
    let port: number = arg.getInt('p');
    let directory: string = arg.getString('d');

    console.log(logging, port, directory);
} catch (argsExceptionError) {
    console.error(argsExceptionError);
}
