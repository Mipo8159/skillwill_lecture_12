// TASK CALLBACKS (DEFAULT)
function repeat(str, x, cb) {
  let result = str;
  for (let i = 0; i < x; i++) {
    result = cb(result);
  }
}
repeat("Johny", 5, (str) => `! ${str} !`);
repeat("James", 5, (str) => `# ${str} #`);
repeat("Smith", 5, (str) => `* ${str} *`);

// TASK CALLBACKS (RECURSIVE)
function repeatRecursive(str, x, cb) {
  if (x === 0) return str;
  return repeatRecursive(cb(str), x - 1, cb);
}
repeatRecursive("Johny", 5, (str) => `! ${str} !`);
repeatRecursive("James", 5, (str) => `# ${str} #`);
repeatRecursive("Smith", 5, (str) => `* ${str} *`);

// TASK PROMISE CREATION
function task(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") reject("error");
    if (num % 2 === 1) setTimeout(() => resolve("even"), 1000);
    if (num % 2 === 0) setTimeout(() => reject("odd"), 2000);
  });
}
task(6)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// USER CARD (HELPER)
function userCard(name) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const img = document.createElement("img");
  img.classList.add("img");
  img.src =
    "https://i.pinimg.com/564x/13/8d/db/138ddb61018e9b74f7fc4d9e1f1afdb6.jpg";

  const h1 = document.createElement("h1");
  h1.innerText = name;

  const button = document.createElement("button");
  button.innerText = "Button";
  button.classList.add("btn");

  const ul = document.createElement("ul");
  ul.classList.add("ul");
  [
    "One ring oof power",
    "Elvish robe of stealth",
    "Sting dagger of bilbo",
  ].forEach((el) => {
    const li = document.createElement("li");
    li.innerText = el;
    ul.appendChild(li);
  });

  wrapper.append(img, h1, ul, button);
  return wrapper;
}

// TASK -  FETCH THEN / CATCH
const data = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log("something went wrong", err.message));

// TASK -  FETCH ASYNC / AWAIT
async function fetchData() {
  try {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await rawData.json();

    if (!rawData.status) {
      throw Error("Not good");
    }

    data.forEach((d) => {
      const user = userCard(d.name);
      document.body.append(user);
    });
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();
