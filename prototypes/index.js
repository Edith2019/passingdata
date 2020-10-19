console.log("soemthing")

//constructor and prototypes

//define constructor
function IamConstructor(val1, val2) {
    this.prop1 = val1,
        this.prop2 = val2

    this.firstFunc = function (val4) {
        return this.prop1 = val4;
    }

    this.compare = function (condition) {
        if (condition === "hello World") {
            return this.prop4 = "hey hey world"
        } else {
            return this.prop4 = "bye bye world"
        }
    }

}

//define an instance
var iAmanInstance = new IamConstructor("Iamval1", "Iamval2")
console.log("iAmanInstance with no new", iAmanInstance)
//to add prop to this specific instance
iAmanInstance.prop3 = "iamprop3"

// to add method to the instance
iAmanInstance.propMethod = function () {
    return this.prop1 + this.prop2
    // return this.prop4 = val4
}
console.log("iAmanInstancewith Method", iAmanInstance.propMethod())
console.log("iAmanInstance", iAmanInstance)
//figure out why not seeing data in the propMethod


//add value to method in constructor
iAmanInstance.firstFunc("hello World")
console.log("iAmanInstance", iAmanInstance.firstFunc("hello World"))


var iAmanotherIstance = new IamConstructor("2nd instance", "val2 2instance")
console.log("iAmanotherIstance", iAmanotherIstance)

//compare the values of prop4 through condition arguments and compare method (in the constructor) for a specific instance
iAmanInstance.compare(iAmanInstance.prop1)
console.log(iAmanInstance.prop4)

console.log(iAmanInstance.prop4)


iAmanotherIstance.compare("testing that it will not work")
console.log(iAmanotherIstance.prop4)

// console.log('object', object)

var items = ["a", "b", "c"]

console.log("items.join(',')", items.join(','))