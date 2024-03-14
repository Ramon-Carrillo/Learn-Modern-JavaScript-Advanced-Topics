var obj = {
  type: "rectangle",
  width: 10,
  height: 5,
};

// In JavaScript, the Object.defineProperty() method is used to define a new property or modify an existing property on an object. It allows you to specify various attributes for the property, such as its value, writability, enumerability, and configurability.

// Here's the syntax for Object.defineProperty():
Object.defineProperty(object, property, descriptor);

// object: The object on which to define or modify the property.

// property: The name or symbol of the property to be defined or modified.

// descriptor: An object that contains the attributes of the property.

// In your code snippet, Object.defineProperty() is used to define a new property called 'area' on the obj object. The descriptor object specifies the attributes of the 'area' property:
Object.defineProperty(obj, "area", {
  value: obj.width * obj.height,
  writable: false,
  enumerable: true,
  configurable: true,
});

// value: The value of the property. In this case, it is calculated as the product of obj.width and obj.height.

//writable: A boolean value indicating whether the property can be changed. In this case, it is set to false, so the 'area' property is read-only.

// enumerable: A boolean value indicating whether the property can be enumerated using a for...in loop or Object.keys() method. In this case, it is set to true, so the 'area' property will be included when iterating over the object's properties.

// configurable: A boolean value indicating whether the property can be deleted or its attributes can be modified. In this case, it is set to true, so the 'area' property can be redefined or deleted
