// Масив завдань
const tasks = [
    { name: "Винести ялинку", importance: 3, deadline: "2024-12-15", probability: 0.5 },
    { name: "Почистити вікна", importance: 3, deadline: "2024-12-20", probability: 0.3 },
    { name: "Зробити звіт", importance: 1, deadline: "2024-12-10", probability: 1 },
    { name: "Винести сміття", importance: 3, deadline: "2024-12-20", probability: 0.5 },
];

// Функція, яка повертає проміс для виконання завдання
function executeTask(task) {
    return new Promise((resolve, reject) => {
        console.log(`Завдання "${task.name}" намагається виконатись...`);
        const randomValue = Math.random(); // Генеруємо випадкове число від 0 до 1
        setTimeout(() => {
            if (randomValue < task.probability) {
                resolve(`Завдання "${task.name}" успішно виконано!`);
            } else {
                reject(`Завдання "${task.name}" не виконано.`);
            }
        }, 1000); // Імітація затримки у виконанні
    });
}

// Функція обробки всіх завдань
function processTasks(tasks) {
    tasks.forEach((task) => {
        if (task.importance === 3) {
            executeTask(task)
                .then((successMessage) => {
                    console.log(successMessage);
                })
                .catch((errorMessage) => {
                    console.log(errorMessage);
                });
        } else {
            console.log(`Завдання "${task.name}" є важливим. Виконайте його вручну.`);
        }
    });
}

// Запуск обробки
console.log("Починаємо обробку завдань...");
processTasks(tasks);
