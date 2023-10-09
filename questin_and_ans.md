<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer B: ReferenceError: greetign is not defined.
#### In the provided code, there's a typo in the variable name. the code declared the variable as "greeting" (with two 't's), but then you attempted to assign an empty object to "greetign" (with one 't'). Since "greetign" is not defined anywhere in the code, it will result in a ReferenceError.

<i>Write your explanation here</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is D: 3.

#### In JavaScript, when you use the + operator with a string and a number, JavaScript will attempt to perform type coercion and convert the string to a number if possible. In this case, "2" can be coerced to the number 2, so the addition of 1 and 2 results in 3.

<i>Write your explanation here</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is A: ['🍕', '🍫', '🥑', '🍔'].

##### In the provided code, the info.favoriteFood property is assigned the value "🍝", but this assignment does not affect the original food array. The food array remains unchanged, so it still contains the original elements ['🍕', '🍫', '🥑', '🍔'].

<i>Write your explanation here</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is B: Hi there, undefined.

#### In the provided code, the sayHi function expects a name parameter, but when you call sayHi() without providing an argument, JavaScript assigns the value undefined to the name parameter. Therefore, the function returns "Hi there, undefined".

<i>Write your explanation here</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is C: 3.

##### In this code, the forEach method iterates over the elements in the nums array. Inside the callback function, it checks if num is a truthy value (i.e., not equal to 0). For each truthy value encountered (1, 2, and 3), it increments the count variable by 1. As a result, count becomes 3 after the loop, and when you log it to the console, you will see 3 as the output.






<i>Write your explanation here</i>

</p>
</details>