// const one = function (){
//     two()
//     console.log('1');
//     console.log('happy independent day');
// }
// const two = function (){
//     three()
// console.log('2');
// }
// const three = function (){
// four()
// console.log('3');
// }
// const four = function (){
//     five()
//     console.log('4');

// }
// const five = function (){
//     six()
//     console.log('5');
// }
// const six = function (){
//     seven()
//     console.log('6');
// }
// const seven = function (){
//     eight()
//     console.log('7')
// }
// const eight = function (){
//         nine()
//         console.log('8');
// }
// const nine = function (){
//     ten()
//     console.log('9');
// }
// const ten = function (){
//         console.log('10');
// }

// setTimeout(one,1000)

setTimeout(()=>{
    console.log(10);
    setTimeout(()=>{
        console.log(9);
        setTimeout(()=>{
            console.log(8);
            setTimeout(()=>{
                console.log(7);
                setTimeout(()=>{
                    console.log(6);
                    setTimeout(()=>{
                        console.log(5);
                        setTimeout(()=>{
                            console.log(4);
                                setTimeout(()=>{
                                     console.log(3);
                                     setTimeout(()=>{
                                        console.log(2);
                                        setTimeout(()=>{
                                            console.log(1);
                                            console.log("Happy Independent's day");
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
