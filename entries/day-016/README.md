# Blobby
It appears, wobbles, changes its shape and disappears again. Just like that.

## Bouncing Ball 
The bouncing ball uses the following fall equation:
```Math
y - y_0 = m(v-v_0)(t - t_0) - 0.5 * g * (t - t_0) ^ 2 
```

where
t = t_real/0.3 (s); 
g = 98.1 (m/s); and
1 (px) = 1 (m).

t(s)	y(-1*px)	v(px/s)
- - - - - - - - - - - - - - 
0	    300         0
0.3	    50          -200.95
2	    201.9       0
3	    50          -102.85
4	    103.8       0
5       

## Keyframes
Circle1: t=0 to t=1.5s
Triangle: t=1.5s to t=2.5s
Pentagon: t=2.5s to t=3.5s
Circle2: t=3.5s to t=5s

No animation-delay!

## Known Issues
- Stripe animation is sometimes out-of-sync with shape animation
- No halo animation around circle2