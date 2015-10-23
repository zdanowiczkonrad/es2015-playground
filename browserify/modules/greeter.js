var greeter = {
    greet: function(name) {
        return "Hello, " + name;
    },
    show: function(message) {
        alert(">>> " + message + " <<<");
    }
};

module.exports = greeter
