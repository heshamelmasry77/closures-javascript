function outerFunction(url) {
    fetch(url).then(() => {
        // this inner function has
        // access to the variable and scope
        // of the outer function
        console.log(url)
    })
}

outerFunction("test url");

