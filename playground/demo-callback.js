const add = (num1,num2,callback) => {
    setTimeout(() => {
        const sum = num1 + num2;
        console.log('2 seconds delay')
        callback(sum);
    }, 2000);
};

add(1,4, (sum) => {
    console.log(sum);
});