// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var males = _.filter(array, function(customer){
        return customer.gender === 'male';
    })
    return males.length;
};

var femaleCount = function (array){
    var females = _.filter(array, function(customer){
        return customer.gender === 'female';
    })
    return females.length;
};

var oldestCustomer = function(array){
    var oldest = _.reduce(array, function(acc, current){
        if(acc.age > current.age){
            return acc;
        } else {
            return current;
        }
    });
    return oldest.name;
};

var youngestCustomer = function(array){
    var young = _.reduce(array, function(acc, current){
        if(acc.age < current.age){
            return acc;
        } else {
            return current;
        }
    });
    return young.name;
};

var averageBalance = function(array){
    var sum = _.reduce(array, function(acc, current){
        var balance = parseFloat(current.balance.replace(/[$,]/g, ''))
        return acc + balance;
    }, 0);
    var avg = sum / array.length;
    return avg;
};

var firstLetterCount = function(array, letter){
    var friend = _.filter(array, function(customer){
        var firstLetter = customer.name[0].toLowerCase();
        return firstLetter === letter.toLowerCase()
    });
    return friend.length;
};

var friendFirstLetterCount = function(array, customer, letter){
    var friendName = _.filter(array, function(customer){
        for(var i = 0; i < customer.friends.length; i++){
            var firstLetterName = customer.friends[0].name[0].toLowerCase();
            return firstLetterName === letter.toLowerCase();   
        }
    })
    return friendName.length;
};


var friendsCount = function(array, name){
    var customersName = _.filter(array, function(customer){
        for(var i = 0; customer.friends.length; i++){
            if(customer.friends[i].name === name){
                return true
            }
        }
    })
};

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
