function getRandomColor(colors) {
            return colors[Math.floor(Math.random() * colors.length)];
        }

        // Array of 6 different colors
        const colorsArray = ['purple', 'green', 'black', 'yellow ', '#f1c40f', '#1abc9c'];

        // Wait for DOM content to be loaded
        document.addEventListener('DOMContentLoaded', function() {
            const colorBox = document.getElementById('color-box');
            const changeColorBtn = document.getElementById('change-color-btn');

            // Add event listener to change color button
            changeColorBtn.addEventListener('click', function() {
                // Get random color from colorsArray
                const randomColor = getRandomColor(colorsArray);
                // Change background color of color-box
                colorBox.style.backgroundColor = randomColor;
            });
        });