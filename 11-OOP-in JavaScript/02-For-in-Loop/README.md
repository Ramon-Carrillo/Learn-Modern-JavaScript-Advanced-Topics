# The for in Loop

- Use the for in loop to iterate over non-array objects. Even though you can use a for in loop on arrays, it is recommended to use a normal for loop.

- The properties displayed may include properties from the prototype chain.

- The for in loop will only display enumerable properties;
  the enumerable attribute of a property must be set to true.

- You cannot rely on the order the properties are displayed.
