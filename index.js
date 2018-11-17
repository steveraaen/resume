const chalk = require ('chalk')

const header = `                A b o u t `
const myName = `S t e v e  R a a e n`
const blurb1 = `        Experienced Product Manager and Software Developer.`
const emptyLine = `.                                                                          `

const summaryHead = `   Sales and engineering skills that help create outstanding products.` 
const summaryBody1 = ` - A career spent in product and business management encourages me to be`
const summaryBody2 = `   an empathetic developer and pragmatic manager.`
const summaryBody3 = ` - Creative collaborator who thoroughly enjoys all aspects of technology.`
const summaryBody4 = ` - Responsible for conceiving, funding, planning and marketing several`
const summaryBody5 = `   high profile business to business products.`


	var orgSkills = [`Product Management`,`Stakeholder Collaboration` ,`Internal Communications`,`Business Analytics`]
	var langSkills = [`Javascript(ES6+)`,`CLI`,`Regex`,`SQL`]
	var dataSkills = [`Regex`,  `MongoDB`,`GeoJSON`, `MySQL`]
	var serverSkills = [`Node.js`,`Express`]
	var frontendSkills = [`React & React Native`, `Vue`, `jQuery`, `Handlebars`, `Flexbox`,`JSX`]
	var ideSkills = [`Xcode`,`Heroku`, `Git`]	


const pipe = ` | `

console.log(chalk.black(emptyLine))
console.log(chalk.black(emptyLine))
console.log(chalk.blueBright.underline(emptyLine))
console.log(chalk.black(emptyLine))
console.log(chalk.whiteBright.bold(header),chalk.whiteBright.bold(myName))
/*console.log(chalk.black(emptyLine))*/
console.log(chalk.blueBright.underline(emptyLine))
console.log(chalk.black(emptyLine))
console.log(chalk.yellowBright.bold(blurb1))
console.log(chalk.black(emptyLine))
console.log(chalk.whiteBright.bold(summaryHead))
console.log(chalk.black(emptyLine))
console.log(chalk.whiteBright(summaryBody1))
console.log(chalk.whiteBright(summaryBody2))
console.log(chalk.black(emptyLine))
console.log(chalk.whiteBright(summaryBody3))
console.log(chalk.black(emptyLine))
console.log(chalk.whiteBright(summaryBody4))
console.log(chalk.whiteBright(summaryBody5))
console.log(chalk.black(emptyLine))

console.log(chalk.magentaBright("Organizational skills"))
for(let i = 0; i < orgSkills.length; i++) {
	console.log(".   " +chalk.cyanBright(orgSkills[i]))
}













