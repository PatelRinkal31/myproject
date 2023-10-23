function Data(){
    const name = ["RInkal","Himalay","Yaami"];
    let x = 25;
    let y = 30;
    let z = 60;
    let result = (x > y) ? x : (y > z) ? y : z;
    console.log(result);

    let a = 100;
    let b = 2000;
    let c = 30;
    let d = 509000;
    let result1 = (a>b && a>c && a>d) ? a : (b>c && b>d) ? b : (c> d) ? c : d;
    console.log(result1);
    let choice = Math.random() > 0.5 ? name[0] : name [1];
return(
    <>
    <h1>Helllo</h1>
    
        <h1>{choice}</h1>
        <h2>{result}</h2>
    </>
)
}
export default Data;