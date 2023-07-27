export const getDay = ()=>{
    let days = []
    for (let i = 0; i < 31; i++) {
        days = [...days, i+1]        
    }
    return days
}

export const getMonth = ()=>{
    let months = []
    for (let i = 0; i < 12; i++) {
        months = [...months, i+1]        
    }
    return months
}

export const getYear = ()=>{
    let year = []
    for (let i = 0; i < 60; i++) {
        year = [...year, 1950+i]    
    }
    return year
}