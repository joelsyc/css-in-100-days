# Blobby
It appears, wobbles, changes its shape and disappears again. Just like that.

## Bouncing Ball 
The bouncing ball uses the following fall equation:
![equation](https://latex.codecogs.com/svg.image?y&space;-&space;y_0&space;=&space;m(v&space;-&space;v_0)&space;-&space;\frac{1}{2}g(t-t0)^2)

where
![equation2](https://latex.codecogs.com/svg.image?t&space;=&space;\frac{t_{real}}{0.3}&space;[s]);
![equation3](https://latex.codecogs.com/svg.image?g&space;=&space;98.1&space;\left&space;[\frac{px}{s}\right&space;]); and
![equation4](https://latex.codecogs.com/svg.image?m&space;=&space;1).

The following table shows the values of translateY:

|t_real \[s\] | translateY \[px\] | v \[px/s \] |
| --------: | -------: | ------: |
| 0         | 300      | 0       |
| 0.3       | 50       | -200.95 |
| 0.6       | 201.9    | 0       |
| 0.9       | 50       | -102.85 |
| 1.2       | 103.8    | 0       |
| 1.5       | 0        |-4.75    |

## Keyframes
| Element | Start Time | End Time |
|   ---   |     ---    |    ---   |
| circle1 |     t=0    |   t=1.5  |
|   tri   |    t=1.5   |   t=2.5  |
|  penta  |    t=2.5   |   t=3.5  |
| circle2 |    t=3.5   |   t=5    |

No animation-delay!

## Known Issues
- Stripe animation is sometimes out-of-sync with shape animation
- No halo animation around circle2