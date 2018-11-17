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
	var langSkills = [`Javascript(ES6+)`,`CLI`,`SQL`]
	var backendSkills = [`Node.js`,`Express`,`Regex`,  `MongoDB`,`GeoJSON`, `MySQL`]
	var frontendSkills = [`React Native`, `ReactJS`, `Vue`, `jQuery`, `Handlebars`, `Flexbox`,`JSX`]
	var ideSkills = [`Xcode`, `Sublime`, `Netbeans`, `MySQL Workbench`, `Postman`, `Heroku`, `Git`]	


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

console.log(chalk.magentaBright("                Organizational skills"))
for(let i = 0; i < orgSkills.length; i++) {
	console.log(".             " +chalk.cyanBright(orgSkills[i]))
}
console.log(chalk.black(emptyLine))
console.log(chalk.magentaBright("                Languages"))
for(let i = 0; i < langSkills.length; i++) {
	console.log(".             " +chalk.cyanBright(langSkills[i]))
}
console.log(chalk.black(emptyLine))
console.log(chalk.magentaBright("                Front End"))
for(let i = 0; i < frontendSkills.length; i++) {
	console.log(".             " +chalk.cyanBright(frontendSkills[i]))
}
console.log(chalk.black(emptyLine))
console.log(chalk.magentaBright("                Backend"))
for(let i = 0; i < backendSkills.length; i++) {
	console.log(".             " +chalk.cyanBright(backendSkills[i]))
}
console.log(chalk.black(emptyLine))
console.log(chalk.magentaBright("                IDE"))
for(let i = 0; i < ideSkills.length; i++) {
	console.log(".             " +chalk.cyanBright(ideSkills[i]))
}









