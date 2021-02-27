users = ['Rufus', 'Bill', 'Joan of Arc', 'Ted', 'Napoleon', 'Billy the Kid']

users = users.sort(function(a, b) {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    
    return 0;
});

console.log(users);

