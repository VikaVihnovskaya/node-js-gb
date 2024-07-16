![What season](https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/83/d2/T-T-224-four-seasons-posters-a4_ver_2.avif)  
To find out the season of the year, use the `getSeason(date)` function, which takes а `Date` object and returns the time of the year that matches it.


---
<details>

<summary>Seasons in English</summary>
The names of the seasons in English are: spring, summer, autumn (fall), winter.

</details>

---

If the `date` argument was not passed, the function return the `string` `'Unable to determine the time of year!'`. If the `date` argument is **invalid**, the function will throw an `Error` with message `Invalid date!`.

For example:

`const springDate = new Date(2024, 03, 31)`

`getSeason(springDate)` => `'spring'`


---