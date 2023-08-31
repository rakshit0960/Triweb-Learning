function updateAge(age) {
  return new Promise((reject, resolve) => {
    if (age < 0) {
      age = age + 1;
      resolve(age);
    } else {
      reject("invalid age");
    }
  });
}

updateAge(10)
    .then((age) => console.log("age updated"))
    .catch((err) => console.log("error message :", err))
    .finally(() => console.log('finally'));


updateAge(-1)
    .then((age) => console.log("age updated"))
    .catch((err) => console.log("error message :", err))
    .finally(() => console.log('finally'));



(async function(age) {
    try {
        let res = await updateAge(age);
        console.log("age updated")
    } catch(err) {
        console.log("error message :", err)
    } finally {
        console.log('finally')
    }
})(10)