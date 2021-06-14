const quotes = ['The strength of the team is each individual member. The strength of each member is the team. - Phil Jackson', 'Everyone has the fire, but the champions know when to ignite the spark. - Amit Ray', 'One man can be a crucial ingredient on a team, but one man cannot make a team. - Kareem Abdul Jabbar']

let randNumber = Math.floor(Math.random()*quotes.length)

const chooseQuote = () => {
    console.log(quotes[randNumber])
}

chooseQuote()

const partOne = ['The world','Life','Everything']

const partTwo = ['can be','is','has the potential to be']

const partThree = ['incredible.','what you make of it.','a place of reflection.']

let randNumberTwo = Math.floor(Math.random()*3)

const makeAQuote = () => {
    console.log(`${partOne[randNumberTwo]} ${partTwo[randNumberTwo]} ${partThree[randNumberTwo]}`)
}

makeAQuote()