import { Observable } from 'rxjs';  
var observable = Observable.create((observer:any) => {  
    observer.next('Hello World!');  
    observer.next('Welcome to JavaTpoint!');  
    observer.complete();  
    observer.next('Bye');  
})  
observable.subscribe(  
    (x:any) => logItem(x),  
    (error: any) => logItem ('Error: ' + error),  
    () => logItem('This is the first Example')  
);  
function logItem(val:any) {  
    var node = document.createElement("li");  
    var textnode = document.createTextNode(val);  
    node.appendChild(textnode);  
    document.getElementById("list").appendChild(node);  
}  
