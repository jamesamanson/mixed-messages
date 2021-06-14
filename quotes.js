const quotes = ['The strength of the team is each individual member. The strength of each member is the team. - Phil Jackson', 'Everyone has the fire, but the champions know when to ignite the spark. - Amit Ray', 'One man can be a crucial ingredient on a team, but one man cannot make a team. - Kareem Abdul Jabbar']

let randNumber = Math.floor(Math.random()*quotes.length)

const chooseQuote = () => {
    console.log(quotes[randNumber])
}

chooseQuote()

const partOne = ['The world','Life','Everything','Your future']

const partTwo = ['can be','is','has the potential to be','will be']

const partThree = ['incredible.','what you make of it.','a place of reflection.','exciting.']

const randNumberTwo = (lengthOfArray) => {
    return Math.round(Math.random()*lengthOfArray)
}

const makeAQuote = () => {
    console.log(`${partOne[randNumberTwo(3)]} ${partTwo[randNumberTwo(3)]} ${partThree[randNumberTwo(3)]}`)
}

makeAQuote()