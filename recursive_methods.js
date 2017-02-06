let teamRange = (a, b) => {
  var total = a, team = a;

  while (team++ < b) { total *= team; }
  return total;
}

let choose_team = (n, k) => {
  if (n == k) {
    return 1;
  } else {
    k = (k < n-k) ? n-k : k;
    return teamRange(k+1, n)/teamRange(1,n-k);
  }
}

console.log(choose_team(6, 2)); // 15
console.log(choose_team(6, 3)); // 20
console.log(choose_team(24, 4)); // 10626
