// snd X plays a sound with a frequency equal to the value of X.
// set X Y sets register X to the value of Y.
// add X Y increases register X by the value of Y.
// mul X Y sets register X to the result of multiplying the value contained in register X by the value of Y.
// mod X Y sets register X to the remainder of dividing the value contained in register X by the value of Y (that is, it sets X to the result of X modulo Y).
// rcv X recovers the frequency of the last sound played, but only when the value of X is not zero. (If it is zero, the command does nothing.)
// jgz X Y jumps with an offset of the value of Y, but only if the value of X is greater than zero. (An offset of 2 skips the next instruction, an offset of -1 jumps to the previous instruction, and so on.)

var playing =0;
var case =0;
snd = (a) =>{
	playing = a;
}

set = (x,y) =>{
	x=y;
	return x;
}

add =(x,y) =>{
	x = x+y;
	return x;
}

mul = (x,y) =>{
	x= x*y;
	return x;
}

mod = (x,y) =>{
	x= x%y;
	return x;
}

rcv = (x) => {
	if (x !=0 ){
	x= playing;
	return x;
	} else console.log("x=0 here!")

}

jgv = (x,y) => {
	if (x>0){
		case -= y;
	} else {
		console.log("x<0 here!")
	}
}

console.log(mul(2,3));
// console.log(playing);