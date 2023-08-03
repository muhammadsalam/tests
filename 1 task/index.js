const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return (seconds) => {
        timerEl.innerText = seconds;

        const formatNumbers = (int) => String(int).padStart(2, "0");

        const render = () => {
            if (seconds === 0) {
                clearInterval(Timer);
            }

            const targetTime = new Date(seconds-- * 1000);

            const elHours =
                    +parseInt(targetTime / 1000 / 60 / 60) > 99
                        ? 99
                        : formatNumbers(
                              parseInt(targetTime / 1000 / 60 / 60)
                          ).slice(-2),
                elMinutes = formatNumbers(targetTime.getMinutes()),
                elSeconds = formatNumbers(targetTime.getSeconds());

            timerEl.textContent = elHours + ":" + elMinutes + ":" + elSeconds;
        };

        const Timer = setInterval(render, 1000);

        render();
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (event) => {
    inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
    const seconds = Number(inputEl.value);

    if (seconds === 0) return;

    animateTimer(seconds);

    inputEl.value = "";
});
