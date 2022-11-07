const getKeyClassNames = (key) => {
    let className = ''
    if (key === 'Enter') className += 'enter'
    else if (key === 'Back') className += 'back'
    else if (key === 'I') className += 'i'
    else className += 'key'
    return className
}

export default getKeyClassNames;
