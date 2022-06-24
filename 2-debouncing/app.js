let counter = 0;
const getData = () => {
    // calls an API and gets data
    console.log("Fetching data ...", counter++);
};

const debounce = (fn, delay) => {
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, arguments);
        }, delay);        
    }
};

const betterFunction = debounce(getData, 300);