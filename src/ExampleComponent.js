// // import React, { useEffect, useState } from 'react';

// // function ExampleComponent() {
// //   useEffect(() => {
// //     console.log('Component mounted');
// //     return () => {
// //       console.log('Component unmounted');
// //     };
// //   });

// //   return (
// //     <div>
// //       <h2>Example Component</h2>
// //     </div>
// //   );
// // }

// // export default ExampleComponent;


// // import React, { useEffect, useState } from 'react';

// // function ExampleComponent() {
// //   useEffect(() => {
// //     console.log('Component mounted');
// //     return () => {
// //       console.log('Component unmounted');
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Example Component</h2>
// //     </div>
// //   );
// // }

// // export default ExampleComponent;

// // import React, { useEffect, useState } from 'react';

// // function ExampleComponent({ count }) {
// //   useEffect(() => {
// //     console.log('Count changed:', count);
// //     return () => {
// //       console.log('Component unmounted');
// //     };
// //   }, [count]);

// //   return (
// //     <div>
// //       <h2>Example Component</h2>
// //       <p>Count: {count}</p>
// //     </div>
// //   );
// // }

// // export default ExampleComponent;



// import React, { useEffect, useState } from 'react';

// function ExampleComponent() {
//   const [count, setCount] = useState(0);

//   // Mounting phase (equivalent to componentDidMount)
//   useEffect(() => {
//     console.log('Component mounted');
    
//     // Cleanup function (equivalent to componentWillUnmount)
//     return () => {
//       console.log('Component unmounted');
//     };
//   }, []); // Empty dependency array means it runs only once after the initial render

//   // Updating phase (equivalent to componentDidUpdate)
//   useEffect(() => {
//     console.log('Count updated:', count);
//   }, [count]); // Runs whenever the 'count' state changes

//   const incrementCount = () => {
//     setCount(prevCount => prevCount + 1);
//   };
// // const count1=[1,2,3,4,5,6,7,8,9]
// // const num = count1.map(num=> num +1);
// // const num2 = count1.filter(num=> num%2===0);
// // const sum = count1.reduce((acc,cur)=>acc+cur ,0);
// // console.log(sum);
// useEffect(()=>{

// })
//   return (
//     <div>
//       <h2>Example Component</h2>
//       <p>Count: {count}</p>
//       <button onClick={incrementCount}>Increment Count</button>
//     </div>
//   );
// }

// export default ExampleComponent;


