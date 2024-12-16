export function fizzBuzz(a: number): string {
    if (a%5==0 && a%3==0){
        return "FizzBuzz";
    }
    if(a%3==0){
        return "Fizz";
    }
    if(a%5==0){
        return "Buzz";
    }
    return;
}
