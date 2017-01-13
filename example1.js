// Implement your own module that exports a an object containing a function.
// However the function you export should invoke a 'private' function
// that is defined within your module but not exported from it.

// Implement a Node.js script that imports the functionality of your module and invokes at least one exported function.

module.exports =  {
    homerSimpson: function(){
      console.log("To alcohol! The. cause of and solution to all of lie's problems.");
        return blahs();
    }
}
  function blahs(){
      console.log("blahblahBlah");
    }