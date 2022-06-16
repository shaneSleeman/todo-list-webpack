const card = (name, priority, done) => {
    const getName = () => name;
    return{getName};
}

export {card};