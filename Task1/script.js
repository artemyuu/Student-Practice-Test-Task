let rectangle = {
    name: "myRect1",
    color: null,
    weight: [1,2,3],
    size: {height: 100, width: 20},
};

let copyRect = deepCopy({}, rectangle);
copyRect.name = "copyRect"
copyRect.weight[0] = 9;
copyRect.color = "white";

console.log(copyRect);
console.log(rectangle);

function deepCopy(dest, obj){ //dest - куда копируем; obj - откуда копируем.
    for(let key in obj) {
        if((typeof obj[key]) === "object" && (obj[key]) === null){
            dest[key] = deepCopy(null, obj[key]);
        }
        else if((typeof obj[key]) === "object" && Array.isArray(obj[key]) == true){
            dest[key] = deepCopy([], obj[key]);
        }
        else if((typeof obj[key]) === "object"){
            dest[key] = deepCopy({}, obj[key]);
        }
        else {
            dest[key] = obj[key];
        }
    }
    return dest;
}
