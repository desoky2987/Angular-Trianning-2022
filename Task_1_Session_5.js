//Tssk 1 Session 5
//Model C
//function in string get num of vauls char a e i o u 
//Mahmoud Mohamed Mahmoud Desoky 2018987

var str = "hello world"
function V(str){
    var counter;
    for (let i = 0 ; i<=str.leangth; i++){
        if (str(i)=='a' || str(i)=='e' || str(i)== 'i' || str(i)=='o'||str(i)=='u'){
            counter++;
        }
        else if (str(i)=='A'||str(i)=='E'||str(i)=='I'||str(i)=='O'||str(i)=='U'){
            counter++;
        }   
    }
    return counter;
}
