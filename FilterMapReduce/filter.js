// filter in the java script is used with the fnction and you can get the > or < number fomr the array
// node FilterMapReduce/filter.js
const myNum = [1,2,3,4,5,6,7,8,9,10];

// 1.
// const newNums = myNum.filter( (num)=> num>4);
// console.log(newNums);

// 2. implicit function
// console.log(myNum.filter( (num)=> num < 5 ));

// 3. implicit functioj with the return values in it:
console.log(myNum.filter( (num)=>{
    return num>4;
} ));

// 4. for each and if things:

const myNums =[];
myNums.forEach((num)=>{
    if (num >4) {
        myNums.push(num);
    }
})
console.log(myNums);


// 5. with the book example 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   single line no scope:
//   let userBook = books.filter( (bk)=> bk.genre === "History");

// if scope then use the return value:
        let userBook = books.filter( (bk)=>{
            return bk.publish>=2011 && bk.genre ==="Science";
        })
  console.log(userBook);