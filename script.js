const data = {
  customers: {
    Moe: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Larry: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Curly: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    }
  },
  prizes: {
    Foo: 1,
    Bar: 3,
    Bazz: 5
  }
};
// class DivMaker {
//   constructor(data) {
//     this.data = data;
//     this.template = this.template.bind(makeTemplate);
//   }
//   makeTemplate() {
//     const div = `<div>hello from the div</div>`;
//     return div;
//   }
// }
class Customers {
  constructor(data) {
    this.data = data;
    this.customers = this.getCustomers();
  }
  getCustomers() {
    const custs = Object.keys(this.data.customers);
    //console.log(custs);
    const przs = values(this.data.customers).slice(6);
    //console.log(przs);
    //const vals = Object.values(data.customers)

    const custNames = custs.map(name => {
      //console.log(name);
      return `
        <div>
        ${name}
        <ul>
        ${przs.map(thing => {
            return `<li><div>${thing}</div>  <div><button id = "minus">-</button>  <button id = "plus">+</button></div></li>`;
          })
          .join("")}
        </ul>
        </div>
        `;
      //   this.template.innerHTML.push(name);
      //   this.template.innerHTML
      //     .push(`<button id="minus">-</button> <button id="plus">+</button>`)
      //     .join("");
    });
    console.log(typeof custNames);
    return custNames.join("");
  }
}
class Prizes {
  constructor(data) {
    this.data = data;
    this.prizes = this.getPrizes();
    //this.addPrize = this.addPrize();
  }
  getPrizes() {
    const prz = values(this.data.prizes);
    //const vals = Object.values(data.prizes);
    const przs = prz
      .map(p => {
        return `
    <div>
    ${p}
    <ul>
    
    </ul>
    
    </div>
    `;
      })
      .join("");
    return przs;
  }

  //addPrize() {}
}
function values(obj, arr = []) {
    for(let key in obj){
        if(typeof obj[key]==="object"){
            values(obj[key],arr);
        }else{
            arr.push( `${key}: ${obj[key]}`);
        }
    }
    return arr;
  }


const firstCust = new Customers(data);
const firstPrize = new Prizes(data);
console.log(firstCust.getCustomers());
//console.log(firstCust.makeTemplate());
const customerSection = document.querySelector("#customerSection");
customerSection.innerHTML = firstCust.getCustomers();
const prizeSection = document.querySelector("#prizeSection");
prizeSection.innerHTML = firstPrize.getPrizes();

//const plus = document.querySelector('#plus');
// plus.addEventListener('click',()=>{

// });
