/**
 * Problem: sync [synchronization] vs async [asynchronization]
 * 
 * 
 */

class FoodReady{
    getTime(){
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const second = currentTime.getSeconds();
        const formatedTime = `${hours%12}: ${minutes}: ${second}`; // `` this can be use as "" and '' for string. One extra facility givving by `` is can add variable inside a string like a = `I am goint to ${palce_name}`
        return formatedTime;

    }

    cutChillis(){
        console.log(this.getTime() + " " + "Task 1 (Runnig): Cutting Chillis.....");

    }

    cutOnion(){
        console.log(this.getTime() + " " + "Task 1 (Runnig): Cutting Onions.....");

    }

    cutMeat(){
        console.log(this.getTime() + " " + "Task 1 (Runnig): Cutting Meat.....");

    }

    cook(){
        console.log(this.getTime() + " " + "Task 1 (Runnig): Cooking.....");

    }
}

module.exports = FoodReady;