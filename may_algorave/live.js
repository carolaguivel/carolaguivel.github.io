
noise(200,5).invert().mult(gradient(1)).out(o0)

osc(10, 0.1, 0.8).rotate(0, 0.1).kaleid().color(-1, 1).out(o1)

osc(10)
 .invert()
 .mult(gradient(1))
 .modulateKaleid(osc(10), [2,3,4].fast(0.5))
 .add(o1)
 .modulate(o1)
 .out()

//  !!! 18:23

solid(2,0,0)
.mask(osc( 20, 20))
//   .add(o1)
//   .modulate(o1)
.out()




solid(2,0,0)
.mask(osc( 20, 20))
//   .add(o1)
//   .modulate(o1)
.out(o1)

osc(10)
 .invert()
 .mult(gradient(1))
 .modulateKaleid(osc(10), [2,3,4].fast(0.5))
 .add(o1)
 .modulate(o1)
 .out()