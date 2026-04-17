// ============================================================
//  JAVASCRIPT CONCEPTS — Clean Examples with Clear Output
// ============================================================

// ------------------------------------------------------------
// 1. HOISTING
// ------------------------------------------------------------
console.log("---------- HOISTING ----------");
console.log("x before assignment:", x); // undefined (hoisted)
x = 10;
var x;
console.log("x after assignment:", x); // 10

// ------------------------------------------------------------
// 2. VAR / LET / CONST
// ------------------------------------------------------------
console.log("\n---------- VAR / LET / CONST ----------");

var firstName = "Manish";
var firstName = "Mannu"; // var allows re-declaration
console.log("var (re-declared):", firstName);

let age = 10;
age = 25; // let allows re-assignment
console.log("let (re-assigned):", age);

const city = "Haldwani"; // const cannot be changed
console.log("const:", city);

// ------------------------------------------------------------
// 3. CLOSURE
// ------------------------------------------------------------
console.log("\n---------- CLOSURE ----------");

function createCounter() {
  let count = 0; // private variable
  return function increment() {
    count++;
    console.log("Counter value:", count);
  };
}

let counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

// ------------------------------------------------------------
// 4. SCOPE
// ------------------------------------------------------------
console.log("\n---------- SCOPE ----------");

var globalScore = 100;
console.log("Global score before function:", globalScore);

function changeScore() {
  globalScore = 50; // modifies global variable
  console.log("Inside function, globalScore:", globalScore);
}
changeScore();
console.log("Global score after function:", globalScore);

// ------------------------------------------------------------
// 5. REGULAR FUNCTION
// ------------------------------------------------------------
console.log("\n---------- REGULAR FUNCTION ----------");

function greetUser(name) {
  console.log("Hello,", name);
}
greetUser("Manisha");

// ------------------------------------------------------------
// 6. ARROW FUNCTION
// ------------------------------------------------------------
console.log("\n---------- ARROW FUNCTION ----------");

let greetArrow = (name) => {
  console.log("Hi from arrow function:", name);
};
greetArrow("Shilpa");

// ------------------------------------------------------------
// 7. CALLBACK
// ------------------------------------------------------------
console.log("\n---------- CALLBACK ----------");

function doTask(name, callbackFn) {
  console.log("Task started for:", name);
  return callbackFn; // return reference, not execution
}

function onTaskDone() {
  console.log("Callback called — task is done!");
}

let taskResult = doTask("Mannu", onTaskDone);
taskResult(); // now execute the callback

// ------------------------------------------------------------
// 8. IIFE (Immediately Invoked Function Expression)
// ------------------------------------------------------------
console.log("\n---------- IIFE ----------");

(function runImmediately() {
  console.log("IIFE ran immediately on its own!");
})();

// ------------------------------------------------------------
// 9. CALL / APPLY / BIND
// ------------------------------------------------------------
console.log("\n---------- CALL / APPLY / BIND ----------");

let person1 = {
  name: "Manish",
  introduce: function (city, age) {
    console.log("Name:", this.name, "| City:", city, "| Age:", age);
  },
};

let person2 = { name: "Sikha" };

console.log("Using call:");
person1.introduce.call(person2, "Haldwani", 23);

console.log("Using apply:");
person1.introduce.apply(person2, ["Haldwani", 23]);

console.log("Using bind:");
let boundIntroduce = person1.introduce.bind(person2, "Haldwani", 23);
boundIntroduce(); // call it later

// ------------------------------------------------------------
// 10. PROMISE
// ------------------------------------------------------------
console.log("\n---------- PROMISE ----------");

const fetchData = new Promise((resolve, reject) => {
  let isSuccess = true;
  if (isSuccess) {
    resolve("Data fetched successfully!");
  } else {
    reject("Something went wrong.");
  }
});

fetchData
  .then((result) => {
    console.log("Promise resolved:", result);
    return result;
  })
  .then((passedResult) => {
    console.log("Chained .then received:", passedResult);
  })
  .catch((error) => {
    console.log("Promise rejected:", error);
  });

const delayedPromise = new Promise((resolve, reject) => {
  let isSuccess = true;
  setTimeout(() => {
    console.log("setTimeout inside Promise fired after 3s");
  }, 3000);
  if (isSuccess) {
    resolve("Delayed promise resolved!");
  } else {
    reject("Delayed promise rejected.");
  }
});

delayedPromise
  .then((result) => {
    console.log("Delayed Promise:", result);
  })
  .catch((error) => {
    console.log("Delayed Promise Error:", error);
  });

// ------------------------------------------------------------
// 11. ASYNC / AWAIT
// ------------------------------------------------------------
console.log("\n---------- ASYNC / AWAIT ----------");

function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data received after 2 seconds!");
    }, 2000);
  });
}

async function loadUserData() {
  try {
    console.log("Loading started...");
    let data = await getUserData(); // waits here
    console.log("Async/Await result:", data);
    console.log("Loading finished!");
  } catch (error) {
    console.log("Async error:", error);
  }
}
loadUserData();

// ------------------------------------------------------------
// 12. FETCH API
// ------------------------------------------------------------
console.log("\n---------- FETCH API ----------");

async function fetchUserFromAPI() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) {
      throw new Error("API call failed with status: " + response.status);
    }
    let user = await response.json();
    console.log("Fetched user name:", user.name);
    console.log("Fetched user email:", user.email);
  } catch (error) {
    console.log("Fetch API error:", error);
  }
}
fetchUserFromAPI();

// ------------------------------------------------------------
// 13. DEBOUNCE
// ------------------------------------------------------------
console.log("\n---------- DEBOUNCE ----------");
// Debounce: waits until you STOP calling before it runs.
// No matter how many times you call it, it only runs
// after the delay passes with NO new calls.

function createDebounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // reset timer on every call
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function searchAPI(query) {
  console.log("Debounce — API call for:", query);
}

let debouncedSearch = createDebounce(searchAPI, 500);

// Simulating rapid calls — only LAST one fires after 500ms
debouncedSearch("m");
debouncedSearch("ma");
debouncedSearch("man");
debouncedSearch("mann");
debouncedSearch("mannu"); // only this one will run after 500ms

// ------------------------------------------------------------
// 14. THROTTLE
// ------------------------------------------------------------
console.log("\n---------- THROTTLE ----------");
// Throttle: runs at most ONCE per delay based on real clock time.
// It checks: has enough real time passed since last run?
// YES → run. NO → skip. No timers, no counting — just a gap check.

function createThrottle(fn, delay) {
  let lastRunTime = 0;

  return function (...args) {
    let currentTime = Date.now();
    if (currentTime - lastRunTime >= delay) {
      lastRunTime = currentTime; // remember when we last ran
      fn.apply(this, args);
    }
  };
}

function handleScroll(position) {
  console.log("Throttle — scroll handler ran at position:", position);
}

let throttledScroll = createThrottle(handleScroll, 1000);

// Simulating rapid calls — only runs once per 1000ms
throttledScroll(100);
throttledScroll(200); // skipped — too soon
throttledScroll(300); // skipped — too soon

setTimeout(() => throttledScroll(400), 1100); // runs — 1.1s passed
setTimeout(() => throttledScroll(500), 1200); // skipped — too soon
setTimeout(() => throttledScroll(600), 2200); // runs — 2.2s passed

// ------------------------------------------------------------
// 15. PROTOTYPE
// ------------------------------------------------------------
console.log("\n---------- PROTOTYPE ----------");

const baseUser = {
  name: "Manisha",
  age: 25,
};

let newUser = Object.create(baseUser); // inherits from baseUser
newUser.name = "Kavita"; // own property overrides
console.log("New user name:", newUser.name); // Kavita (own)
console.log("New user age:", newUser.age); // 25 (from prototype)

let vehicle = {
  drive() {
    console.log(this.name, "is driving!");
  },
};

function Car(name) {
  this.name = name;
}

Car.prototype = vehicle;
let myCar = new Car("Honda");
console.log("Car name:", myCar.name);
myCar.drive(); // inherited from prototype

// ------------------------------------------------------------
// 16. CURRYING
// ------------------------------------------------------------
console.log("\n---------- CURRYING ----------");

// Normal function — all args at once
function addNormal(a, b, c) {
  return a + b + c;
}
console.log("Normal add(1,2,3):", addNormal(1, 2, 3));

// Curried version — one arg at a time
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log("Curried add(2)(3)(5):", curriedAdd(2)(3)(5));

// ------------------------------------------------------------
// 17. MEMOIZATION
// ------------------------------------------------------------
console.log("\n---------- MEMOIZATION ----------");
// Memoization: store results of expensive calculations
// so you don't repeat them when same input is given again.

function createMemoize() {
  let cache = {};
  return function (number) {
    if (cache[number]) {
      console.log("Memoize — returning from cache for:", number);
      return cache[number];
    }
    console.log("Memoize — calculating fresh for:", number);
    let result = number * number + number;
    cache[number] = result;
    return result;
  };
}

let memoizedCalc = createMemoize();
console.log("Result for 4:", memoizedCalc(4)); // calculates
console.log("Result for 4:", memoizedCalc(4)); // from cache
console.log("Result for 7:", memoizedCalc(7)); // calculates
console.log("Result for 7:", memoizedCalc(7)); // from cache

// ------------------------------------------------------------
// 18. SHALLOW COPY
// ------------------------------------------------------------
console.log("\n---------- SHALLOW COPY ----------");
// Shallow copy: top level is copied but nested objects
// are still SHARED — changing nested in copy affects original!

let originalUser = {
  name: "Manisha",
  age: 24,
  address: {
    city: "Haldwani",
  },
};

let shallowCopy = { ...originalUser };
shallowCopy.name = "Namrita"; // does NOT affect original
shallowCopy.address.city = "Delhi"; // DOES affect original (shared)

console.log("Shallow copy name:", shallowCopy.name); // Namrita
console.log("Shallow copy city:", shallowCopy.address.city); // Delhi
console.log("Original name:", originalUser.name); // Manisha (safe)
console.log("Original city:", originalUser.address.city); // Delhi (changed!)

// ------------------------------------------------------------
// 19. DEEP COPY
// ------------------------------------------------------------
console.log("\n---------- DEEP COPY ----------");
// Deep copy: everything is fully copied — nested objects
// are NOT shared. Changing copy never affects original.

let originalData = {
  name: "Manisha",
  age: 24,
  address: {
    city: "Haldwani",
  },
};

let deepCopy = JSON.parse(JSON.stringify(originalData));
deepCopy.name = "Akriti";
deepCopy.address.city = "Delhi";

console.log("Deep copy name:", deepCopy.name); // Akriti
console.log("Deep copy city:", deepCopy.address.city); // Delhi
console.log("Original name:", originalData.name); // Manisha (safe!)
console.log("Original city:", originalData.address.city); // Haldwani (safe!)

// ------------------------------------------------------------
// 20. EVENT DELEGATION
// ------------------------------------------------------------
console.log("\n---------- EVENT DELEGATION ----------");
// Event Delegation: instead of adding a listener to every child,
// add ONE listener to the parent and let events bubble up.
// Works great for dynamic lists!

// Run this in browser:
/*
<ul id="menuList">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>

let menuList = document.getElementById("menuList");

menuList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("You clicked menu item:", event.target.textContent);
  }
});
*/
console.log(
  "Event delegation example — paste the browser code above in HTML to test!",
);
