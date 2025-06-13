let students = {
  js: [
    {
      name: 'John',
      progress: 100,
    },
    {
      name: 'Ivan',
      progress: 60,
    },
  ],
  html: {
    basic: [
      {
        name: 'Peter',
        progress: 20,
      },
      {
        name: 'Ann',
        progress: 18,
      },
    ],
    pro: [
      {
        name: 'Sam',
        progress: 10,
      },
    ],
    start: {
      students: [
        {
          name: 'Sem',
          progress: 100,
        },
      ],
    },
  },
};

// Algorithm: O(n)
function getTotalProgressByIteration(data) {
  let total = 0;
  let students = 0;

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;
      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      for (let level of Object.values(course)) {
        students += level.length;
        for (let i = 0; i < level.length; i++) {
          total += level[i].progress;
        }
      }
    }
  }
  return total / students;
}

console.log(
  `Avarage progress from all students is ${getTotalProgressByIteration(
    students
  )}%`
);

// Algorithm: O(k)
function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }
    return [total, data.length];
  } else {
    let total = [0, 0];

    for (let subData of Object.values(data)) {
      const subDataArr = getTotalProgressByRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }

    return total;
  }
}

const resultOfTotalProgressByRecursion = getTotalProgressByRecursion(students);
console.log(
  `Avarage progress from all students is ${
    resultOfTotalProgressByRecursion[0] / resultOfTotalProgressByRecursion[1]
  }%`
);
