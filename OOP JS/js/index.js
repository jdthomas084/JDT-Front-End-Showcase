// This is an Object-Oriented JavaScript example,
// authored by Joshua D. Thomas, GR Student at Wilmington University
// January 05, 2026,
// After defining a function, and declaring an Object, example usage is shown.

function compose_Obj() {
    const Name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    const Email = document.getElementById("email").value.toString();

    class User {
        constructor(name, email) {
            this.name = Name;
            this.email = Email;
        }

        // Class Method
        greet() {
            return `Hello, ${this.name}, ${this.email}!`;
        }

        // Class Method
        updateEmail(newEmail) {
            this.email = newEmail;
        }
    }

    // Example usage:
    // =======================================
    // Declare a new User() object
    const user1 = new User(Name, Email);
    // CALL the greet() Method
    alert(user1.greet());          // "Hello, [First Name and Last Name], [E-mail]]!"
    // CALL the updateEmail() Method
    user1.updateEmail("jdthomas084@gmail.com");
    // CALL the greet() Method
    alert(user1.greet());// "Hello, [First Name and Last Name], [jdthomas084@gmail.com]!"
}
