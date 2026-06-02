function makeCounter(start = 0)
{
    let count = start;
    return {
        increment() {count++},
        decrement(){count --},
        getCount(){return count;}
    }
}
let counter = makeCounter(5);
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());
