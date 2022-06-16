const card = (name, description, date, priority, done) => {
    const getName = () => name;
    return{getName};
}

export {card};