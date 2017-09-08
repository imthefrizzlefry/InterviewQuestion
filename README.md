# InterviewQuestion
[![Build Status](https://travis-ci.org/imthefrizzlefry/InterviewQuestion.svg?branch=master)](https://travis-ci.org/imthefrizzlefry/InterviewQuestion)


# TODO

* Write a function that takes as an argument a list of integers, and return only those integers in the original list that appear an even number of times. For example, [1, 2, 3, 1]  should return [1], and [1, 2, 3, 4, 5, 1, 3, 4, 3] should return [1, 4].

* Given a flat file CSV, which denotes an Organization Structure as so:
//   employee_id, first_name, last_name, reports_to
//
//   mfly, Marty, McFly, jblogs
//   jblogs, Joe, Blogs, rboss
//   nmuller, Nicolas, Muller, jblogs
//   rboss, Robert, Boss, 
//   trice, Travis, Rice, rboss
//
** Print out a result of directs as such:
// 1. Robert Boss (rboss)
//     2. Joe Blogs (jblogs)
//         3. Nicolas Muller (nmuller)
//         3. Marty McFly (mfly)
//     2. Travice Rice (trice)
