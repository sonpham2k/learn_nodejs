// Doi tuong trong doi tuong
var person_1 = {
  name: {
      firstName: "Thanh",
      lastName: "Tài"
  },
  birthday: {
      day: 12,
      month: 5,
      year: 1996
  }
}

var person_2 = {
  name: {
      firstName: "Son",
      lastName: "Tài"
  },
  birthday: {
      day: 12,
      month: 5,
      year: 2000
  }
}

// mang trong mang
arr = [person_1, person_2];

console.log(arr[0]['name']['firstName'])