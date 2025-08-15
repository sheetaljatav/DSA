import React from "react";
import "./RadixSort.css";

const RadixSort = () => (
  <div className="bubble-sort-container">
    <section className="bubble-sort-section">
      <h2>🧠 What is Radix Sort?</h2>
      <p>
        Radix Sort is a way to sort numbers by looking at one digit at a time — starting from the rightmost digit (ones place), then tens, then hundreds, and so on.
      </p>
      <p>
        It doesn't compare numbers like bubble sort or quicksort. It groups numbers into buckets based on digits and then puts them back together.
      </p>

      <h3>💡 Let’s Understand with a Simple Example</h3>
      <p>You have these numbers:</p>
      <pre>[33, 45, 40, 25, 17, 24]</pre>
      <p>We want to sort them smallest to biggest.</p>

      <h4>Step 1: Look at the rightmost digit (ones place)</h4>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Ones Place</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>33</td><td>3</td></tr>
          <tr><td>45</td><td>5</td></tr>
          <tr><td>40</td><td>0</td></tr>
          <tr><td>25</td><td>5</td></tr>
          <tr><td>17</td><td>7</td></tr>
          <tr><td>24</td><td>4</td></tr>
        </tbody>
      </table>
      <p>➡️ Now, we put them in buckets based on the digit:</p>
      <pre>
{`Bucket 0: 40  
Bucket 3: 33  
Bucket 4: 24  
Bucket 5: 45, 25  
Bucket 7: 17`}
      </pre>
      <p>➡️ Put all numbers back in order from buckets:</p>
      <pre>[40, 33, 24, 45, 25, 17]</pre>

      <h4>Step 2: Now look at the tens place</h4>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Tens Place</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>40</td><td>4</td></tr>
          <tr><td>33</td><td>3</td></tr>
          <tr><td>24</td><td>2</td></tr>
          <tr><td>45</td><td>4</td></tr>
          <tr><td>25</td><td>2</td></tr>
          <tr><td>17</td><td>1</td></tr>
        </tbody>
      </table>
      <p>➡️ Put into buckets:</p>
      <pre>
{`Bucket 1: 17  
Bucket 2: 24, 25  
Bucket 3: 33  
Bucket 4: 40, 45`}
      </pre>
      <p>➡️ Put them back in order:</p>
      <pre>[17, 24, 25, 33, 40, 45]</pre>
      <p>✅ Now the array is fully sorted!</p>

      <h3>🧠 Key Points to Remember</h3>
      <ul>
        <li>It looks at each digit, starting from the rightmost.</li>
        <li>It uses buckets (0-9) to group numbers.</li>
        <li>The order inside each bucket must be kept the same (this is called stable sorting).</li>
        <li>It repeats the process for every digit until the array is sorted.</li>
      </ul>

      <h3>🧮 When to Use Radix Sort?</h3>
      <ul>
        <li>You are sorting non-negative integers (0 or above).</li>
        <li>The numbers have fixed or small number of digits.</li>
        <li>You want fast performance without comparisons.</li>
      </ul>

      <h3>💻 Python Code (Easy Version)</h3>
      <pre>
{`def radixSort(arr):
    max_digits = len(str(max(arr)))
    place = 1

    for _ in range(max_digits):
        buckets = [[] for _ in range(10)]

        for num in arr:
            digit = (num // place) % 10
            buckets[digit].append(num)

        arr = [num for bucket in buckets for num in bucket]
        place *= 10

    return arr

arr = [33, 45, 40, 25, 17, 24]
print("Sorted:", radixSort(arr))`}
      </pre>

      <h3>✅ In the End:</h3>
      <p>
        Radix Sort is like:<br />
        <b>"Sort by ones → put in buckets → collect → sort by tens → buckets again → collect → done!"</b>
      </p>
    </section>
  </div>
);

export default RadixSort;