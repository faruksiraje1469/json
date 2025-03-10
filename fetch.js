fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => console.log(response))
      .then(data => {
        console.log(data);
      })

      const handleLoadData = () =>{
        console.log("hello");
      }