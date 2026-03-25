// Add a listener for 'submit' to write user input results to the console.
window.addEventListener("load", () => {
    const result = (id) => document.getElementById(id);

    result("empForm").addEventListener("submit", (e) => {
        e.preventDefault();
        
        console.log(`ID: ${result("id").value}`);
        console.log(`Name: ${result("name").value}`);
        console.log(`Extension: ${result("ext").value}`);
        console.log(`Email: ${result("email").value}`);
        console.log(`Department: ${result("department").value}`);
    });
});
