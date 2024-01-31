function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const textAreaRef = document.querySelector("textarea");

   function onClick () {
      let data = Json.parse(textAreaRef.value)
      let result = {};

      for(let line of data){
         let [name,workers] = line.split(" - ");
         if(!result.hasOwnProperty(name)){
            result[name] = {
               avgSalary:0,
               bestSalary:0,
               workers:[]
            }
         }
         result[name].workers = getArrOfWorker(workers,result[name].workers)
         updateSalary(result[name])
      }
      
   }
   function updateSalary(restaurant){
      let sumOfSalary = 0;
      let bestSalary = 0;
      restaurant.workers.forEach(worker => {
         sumOfSalary += worker.salary
         if(bestSalary < worker.salary){
            bestSalary = worker.salary
         }
      });
      restaurant.bestSalary = bestSalary;
      restaurant.avgSalary = sumOfSalary / restaurant.workers.length
   }

   function getArrOfWorker(workersData,existWorkers){
      let arrOfWorkers = workersData.split(", ");

      for(let tokens of arrOfWorkers){
         let [name,salary] = tokens.split(" ");
         salary = Number(salary)
         existWorkers.push({
            name,
            salary
         });
      }
      return result;
   }
}


/*
["PizzaHut - Peter
500, George 300, Mark
800",
"TheLake - Bob 1300,
joe 780, Jane 660"]
*/