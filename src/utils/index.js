const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday']

export const getDay = time => days[new Date(time*1000).getDay()]

export const mathRound = number => Math.round(number)