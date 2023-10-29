 /*  function areEqual(obj1, obj2) {
    // Check if the JSON objects are equal

    return JSON.stringify(obj1) === JSON.stringify(obj2);
  } */
  
  const json1 = { name:"tamizh",age:25 };
  const json2 = { age:25,name:"tamizh"};
  
 let key1=Object.keys(json1);
 let key2=Object.keys(json2);
 let key3=["tamizh",25]
 console.log(key1,key2);

let flag=true;

 if(key1.length==key2.length){
   key1.forEach(x=>{if(json1[x]!=json2[x]){
    flag=false;
   }})
    
 }
 else{
    flag=false;
 }
 if(flag){
    console.log("obj are same")
 }
 else{
    console.log("obj are not same");
 }
 
  
    