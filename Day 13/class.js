class queue{
    constructor(){
        this.data = [];
    }

    add(input){
        this.data.push(input);
        console.log(this.data);
    }

    runProcess(){
        console.log(this.data);
        while (this.data.length){
            let interval = Math.floor(Math.random()*10)+1
            let promise = new Promise(function(resolve) {
                setTimeout(() => resolve(`${this.data[0]} done in ${interval} seconds`), interval*1000);
            });

            
            promise.then(
                result => console.log(result),
            );
            this.data.shift();
        }
    }
}

module.exports = queue;