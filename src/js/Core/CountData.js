const CountData = (NameItem) => {
    let key = JSON.parse(window.localStorage.getItem(NameItem));
    console.log(key);
    if (key === null) return 0;
    else return key.length;
};

export default CountData;