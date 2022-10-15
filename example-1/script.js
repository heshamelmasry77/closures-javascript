let name = "hesh";

function printName() {
    console.log(name);
}

// the whole file here is a closure

printName();
// hesh

name = "lisa"

printName();

// lisa