//Write a JS program that calculates how much resources will be required for the construction of a pyramid. 
//It is made out of stone, marble, lapis lazuli, and gold.
// Your program will receive an integer that will be the base width and length of the pyramid and an 
//increment that is the height of each step.
// The bulk is made out of stone, while the outer layer is made out of marble.
// Every fifth step’s outer layer is made out of lapis lazuli instead of marble.
// The final step is made out of gold.

//The pyramid is built with 1x1 blocks with a height equal to the given increment.
// The first step of the pyramid has a width and length equal to the given base and every next step is
// reduced by 2 blocks (1 from each side). 
//The height of every step equals the given increment.
// See the drawing for an example. White steps are covered in marble, blue steps are covered in lapis lazuli
// (every fifth layer from the bottom), and yellow steps are made entirely out of gold (top-most step).