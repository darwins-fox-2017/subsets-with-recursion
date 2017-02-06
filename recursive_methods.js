let choose_team = (n, k) => {
    if(n === k || k === 0 || n === 0){
      return 1
    } else {
      return choose_team(n-1, k-1) + choose_team(n-1, k)
    }
}

console.log(choose_team(6, 2)); // 15
console.log(choose_team(6, 3)); // 20
console.log(choose_team(24, 4)); // 10626
