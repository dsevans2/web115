document.getElementById("generateButton").addEventListener("click", generateMealPlan);
document.getElementById("printButton").addEventListener("click", printMealPlan);
document.getElementById("downloadButton").addEventListener("click", downloadMealPlan);

function generateMealPlan() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const goal = document.getElementById("goal").value;

    const breakfast = document.getElementById("breakfast").value;
    const snack = document.getElementById("snack").value;
    const lunch = document.getElementById("lunch").value;
    const snack1 = document.getElementById("snack1").value;
    const dinner = document.getElementById("dinner").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const flyWindow = window.open("", "MealPlanWindow", "width=800,height=600,left=200,top=200");
    flyWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meal Plan for ${name}</title>
        
    </head>
    <body>
        <header>
            <h1>Meal Plan</h1>
            <p>${name} | ${email}</p>
            <p>Weekly Goal: ${goal}</p>
        </header>

        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Breakfast</th>
                    <th>Snack</th>
                    <th>Lunch</th>
                    <th>Snack 2</th>
                    <th>Dinner</th>
                </tr>
            </thead>
            <tbody>
                ${generateTableRows(breakfast, snack, lunch, snack1, dinner)}
            </tbody>
        </table>
    </body>
    </html>
    `);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function generateTableRows(breakfast, snack, lunch, snack1, dinner) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return days
        .map(
            (day) => `
            <tr>
                <td>${day}</td>
                <td>${breakfast}</td>
                <td>${snack}</td>
                <td>${lunch}</td>
                <td>${snack1}</td>
                <td>${dinner}</td>
            </tr>`
        )
        .join("");
}

function printMealPlan() {
    window.print();
}

function downloadMealPlan() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const goal = document.getElementById("goal").value;

    const breakfast = document.getElementById("breakfast").value;
    const snack = document.getElementById("snack").value;
    const lunch = document.getElementById("lunch").value;
    const snack1 = document.getElementById("snack1").value;
    const dinner = document.getElementById("dinner").value;

    const content = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meal Plan for ${name}</title>
        
    </head>
    <body>
        <header>
            <h1>Meal Plan</h1>
            <p>${name} | ${email}</p>
            <p>Weekly Goal: ${goal}</p>
        </header>

        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Breakfast</th>
                    <th>Snack</th>
                    <th>Lunch</th>
                    <th>Snack 2</th>
                    <th>Dinner</th>
                </tr>
            </thead>
            <tbody>
                ${generateTableRows(breakfast, snack, lunch, snack1, dinner)}
            </tbody>
        </table>
    </body>
    </html>
    `;

    const newWindow = window.open("", "_blank");
    newWindow.document.write(content);
    newWindow.document.close();

}
