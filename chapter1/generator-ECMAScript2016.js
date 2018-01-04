function * generators(){
    yield 1
    yield 2
    yield 3
}

const g = generators()
while(!(g.next().done))
{
    console.log("aaaaa");
}
