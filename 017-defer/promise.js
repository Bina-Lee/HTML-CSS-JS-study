'use strict'

let request =new XMLHttpRequest()
request.open('Get','http://127.0.0.1:5501/001-hello_world/hello_world.html',false);//false->비동기식인지(아니다, 동기식)
request.send(null)

if(request.status===200){
    console.log(request.responseText);
}

for(let i=0;i<10;i++){
    console.log(i)
}

//javascript->promise

const a=new Promise((resolve,reject)=>{
    //해야 할 일 지정
    console.log('hello');
    setTimeout(()=>{
        resolve('ended');
    },3000);
    
})

a.then((v)=>{
    console.log('then received'+v);
})//promise 끝나면 실행

for(let i=0;i<10;i++){
    console.log(i)
}//promise와 상관없이 실행

////////////////////////////////////////////////

let request1 =new XMLHttpRequest()

request.onload=()=>{
    if(request.status===200){
        console.log('응답옴');
        console/log(request.responseText);
    }
    else console.log('응답없음');
}

request.open('Get','http://127.0.0.1:5501/001-hello_world/hello_world.html',true);//false->비동기식인지(아니다, 동기식)
request.send(null)

////////////////////////////////////////////////

fetch('http://127.0.0.1:5501/001-hello_world/hello_world.html')//반환값 자체가 promise가 됨

a
.then((response)=>{    //fetch가 성공하여 서버로부터 응답이 제대로 왔을때 실행
    console.log(response);
    console.log(response.text());//반환값이 문자열이 아님
        //또 다른 promise를 반환
})
.then((data)=>{
    console.log(data)//text로 바뀐 응답
})
.catch((err)=>{
    console.log(err);
})

for(let i=0;i<10;i++){
    console.log(i)//비동기 요청과 상관없는 부분이 별도로 실행되는지 확인용
}

////////////////////////////////////////////////////////////////////////////

function B(){
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('B 실행');
            resolve(45)
        },3000)
    })
}

async function fetchUser(a){
    console.log('promise실행');
    const k=B();
    if(k>=0)return '실행 끝';
    else throw new Error('음수');
}

//async : syntactic sugar for promise

async function fetchUser(){
    
    console.log(`promise 실행`);
    
    if(a>=0)return '실행끝';
    else throw new Error('음수');
    
    return '실행끝';

}

// function fetchUser(){
//     return new Promise((resolve,reject)=>{
//         console.log(`promise 실행`);
//         resolve('실행끝');
//     })
// }

const b=fetchUser()

b
.then((v)=>{
    console.log(`fetchUser result: ${v}`);
})
.catch((error)=>{
    console.log('에러 '+error);
})
.finally(()=>{
    //resolve나 reject에 상관없이
    //promise가 종료되면서 공통적으로 실행되어야 하는 부분
    console.log('promise 끝 finally');
})