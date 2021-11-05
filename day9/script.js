async function getcountrieslist() {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const list = await data.json();
    console.log("whole data ",list);
    const countries = list.map(con => (con.name).common);
    console.log("all countries names",countries);
    const asiancountries = list.filter(con => con.continents[0]=="Asia");
    const asiancountriesnames = asiancountries.map(con => (con.name).common);
    console.log("all asian countris list is",asiancountries);
    console.log("all asian countries names are",asiancountriesnames);
    const population = list.filter(con => con.population<200000);
    console.log("population less than 2L countries list is " ,population);
    const populationnames = population.map(con => (con.name).common);
    console.log("population less than 2L countries names are " ,populationnames);
    function question3(item) {
        const que = item.name;
        console.log(que);
        const cap = item.capital;
        console.log(cap);
        const flag = item.flags;
        console.log(flag);
    }
    const list1 = list.forEach(question3);
    const pop = list.map(con => con.population);
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    console.log("array of population of all countries is",pop);
    console.log("the whole population is",pop.reduce(reducer));
    const currencies = list.map(con => con.currencies);
    console.log(currencies);
}
getcountrieslist();

