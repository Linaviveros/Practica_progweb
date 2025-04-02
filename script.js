document.addEventListener("DOMContentLoaded", () => {

    // Ejercicio 1: Contador de Caracteres
    const commentBox = document.getElementById("commentBox");
    const charCount = document.getElementById("charCount");

    commentBox.addEventListener("input", () => {
        let remaining = 200 - commentBox.value.length;
        charCount.textContent = `Caracteres restantes: ${remaining}`;
    });

    // Ejercicio 2: Galería Interactiva
    
    
    const thumbnails = document.querySelectorAll(".thumbnail");
    const previewImage = document.getElementById("previewImage");
    const imageDescription = document.getElementById("imageDescription");
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("mouseover", () => {
            previewImage.src = thumbnail.src;
            previewImage.style.visibility = "visible";
            previewImage.style.opacity = "1"; // Hace la imagen visible con transición
            imageDescription.textContent = thumbnail.getAttribute("data-description");
            imageDescription.style.visibility = "visible";
            imageDescription.style.opacity = "1";
        });
    
        thumbnail.addEventListener("mouseout", () => {
            previewImage.style.visibility = "hidden";
            previewImage.style.opacity = "0"; // Oculta la imagen con transición
            imageDescription.style.visibility = "hidden";
            imageDescription.style.opacity = "0";
        });
    });
    



    // Ejercicio 3: Lista de Tareas
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    function addTask() {
        if (taskInput.value.trim() !== "") {
            let li = document.createElement("li");
            li.textContent = taskInput.value;

            // Botón de eliminar
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "❌";
            deleteBtn.addEventListener("click", () => {
                taskList.removeChild(li);
            });

            li.addEventListener("click", () => {
                li.classList.toggle("completed");
            });

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }

    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

});
