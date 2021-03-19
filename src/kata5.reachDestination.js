const reachDestination = (distance, speed) => {

const time = distance / speed;
const willArrive = Math.round(time * 2)/2;

    if (willArrive <= 0.5) {
        return `I should be there in half an hour`
    } else if (willArrive === 1) {
        return `I should be there in an hour`
    } else {
    return `I should be there in ${willArrive} hours`
    }

};


module.exports = reachDestination;
