//Given reducer method:

function add(a,b){
    return a+b
   }

   //Create a method called memoize such that: 
   const memoizeAdd = memoize(add);

   //then calling…
   memoizeAdd(100,100); //returns 200
   memoizeAdd(100); //returns 100
   memoizeAdd(100,200) //returns 300
   memoizeAdd(100,100) //returns 200 without computing