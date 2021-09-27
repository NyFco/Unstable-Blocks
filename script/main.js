let blocksAmount = randNumGen(1, 20);

const ul = document.querySelector("#list");
const listItems = document.querySelectorAll("li");
const counterValue = document.querySelector("#counterValue");

let text = document.createTextNode(blocksAmount);

for (let i = 0; i < blocksAmount; i++) {
    const block = listItems[i];
    changer(block);
    block.classList.add("visible", "test");
    listItems[i].addEventListener("mouseenter", () => {
        changer(listItems[i]);
    });
    counterValue.appendChild(text);
    listItems[i].addEventListener("click", () => {
        setTimeout(() => {
            block.classList.remove("visible");
            setTimeout(() => {
                if (blocksAmount === 0) alert("You Won!");
            }, 100);
        }, 300 /*MS*/ );
        console.log(block.classList.contains("test"));
        if (block.classList.contains("test")) {
            blocksAmount--;
            const text2 = document.createTextNode(blocksAmount);
            counterValue.removeChild(text);
            counterValue.appendChild(text2);
            text = text2;
        }
        block.classList.remove("test");
    });
}

// Functions

function randNumGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorGen() {
    const red = randNumGen(0, 255);
    const green = randNumGen(0, 255);
    const blue = randNumGen(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function position(pos) {
    return pos === "TOP" ? `${randNumGen(0, 800)}px` : `${randNumGen(0, 1250)}px`;
}

function changer(el) {
    el.style.backgroundColor = colorGen();
    el.style.top = position("TOP");
    el.style.left = position("LEFT");
    el.style.width = `${randNumGen(100, 400)}px`;
    el.style.height = `${randNumGen(100, 400)}px`;
}
