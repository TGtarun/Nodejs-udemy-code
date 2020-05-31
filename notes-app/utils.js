console.log("hey i am from different file");

const name = 'tarun';

const add = function(a,b){
    return a+b
}

exports.one = add ;

exports.another = name ;