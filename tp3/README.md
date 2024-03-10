# CG 2023/2024

## Group T04G11

## TP 3 Notes

- Before the first exercise we started by familiarising ourselves with controlling the lights and seeing their effects on the different pre-made materials.
- In the first exercise we hard-coded the extra necessary vertices and respective normals for our previously made unit-cube to be properly illuminated.
- We also created a new custom material to replicate the appearence of wood, as well as extra colored materials innate to the tangram class to be used by each of the primitives in it, to finish replicating the image supplied in the first class.

![Screenshot 1](tp3/screenshots/cg-t04g11-tp3-1.png) 
![Screenshot 1](tp3/screenshots/cg-t04g11-tp3-2.png)

- In the second exercice we created a new prism class with dynamically generated vertices, indices and normals according to values supplied to the object constructor for the number of slices and stacks.
- In our implementation, we've defined the same vertices multiple times. This is because a single vertex can be shared among different faces, and each face requires a unique normal for correct lighting calculations. 
- This approach leads to an effect similar to "Constant Shading". In this shading model, each face of a 3D object is lit uniformly, resulting in a single color per face. This is achieved by ensuring that each face has normal vectors that are perpendicular to it.
- It was not necessary to create a specific display function for the prism, nor to perform any transformations.

![Screenshot 3](tp3/screenshots/cg-t04g11-tp3-3.png)

- In the third exercise, we created a new class called MyCylinder, a copy of the MyPrism from the previous exercise, but we changed the normals in each vertex, in a way that the normal would be perpendicular to the surface of a perfect cylinder. With these changes, the surface of our cylinder became much more smoothed, comparing to the previous exercise.

![Screenshot 4](tp3/screenshots/cg-t04g11-tp3-4.png)