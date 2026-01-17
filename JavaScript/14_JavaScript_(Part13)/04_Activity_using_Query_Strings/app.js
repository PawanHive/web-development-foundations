/*
******** How to update Query-string in url using Axios ********

*/

let url = "http://universities.hipolabs.com/search?name=";

// let country = "nepal";

// async function getColleges() {
//     try {
//         let res = await axios.get(url+country);
//         console.log(res)
//     } catch(err) {
//         console.log(err)
//     }
// }
// getColleges();

//=============================================================

// # Now create Program, which print list of colleges 
// associated with that country

// let country = "nepal";

let btn = document.querySelector('button');

btn.addEventListener('click', async function() {
    let country = document.querySelector('input').value;
    console.log(country);
    // getColleges(country);

    let colArr = await getColleges(country);
    // console.log(colArr)
    show(colArr);
})

function show(colArr) {
    let ul = document.querySelector('ul');
    ul.innerText = "";
    for (const col of colArr) {
        console.log(col.name);
        let li = document.createElement('li');
        ul.append(li)
        li.append(col.name);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        return res.data
    } catch(err) {
        console.log(err)
    }
}
getColleges();


// =====================================================================

// # now create a program, where we can find college associated
// with state of India. 

