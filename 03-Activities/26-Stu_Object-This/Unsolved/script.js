console.log(this);

function helloThis() {
  console.log('Inside this function, this is ' + this);
}

helloThis();

var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

child.ageTenYears();

var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

investor.investment.investmentGrowth();
