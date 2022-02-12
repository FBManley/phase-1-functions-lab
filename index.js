function distanceFromHqInBlocks(blockBegin) {
    if (blockBegin > 42)
        return blockBegin - 42
    else (blockBegin < 42)
        return 42 - blockBegin
}

function distanceFromHqInFeet(feetBegin) {
    if (feetBegin > 42)
        return (feetBegin - 42) * 264;
    else (feetBegin < 42)
        return (42-feetBegin) * 264
}

function distanceTravelledInFeet(sLocation, dLocation) {
    if (sLocation > dLocation)
        return (sLocation - dLocation) * 264;
    else (sLocation < dLocation)
        return (dLocation - sLocation) * 264
}

function calculatesFarePrice(start, destination){
    let blockDistance = Math.abs(start - destination);
    let distanceTravelled = blockDistance * 264;
    if (distanceTravelled <= 400){
        console.log('give customers a free sample');
        return 0
    }
    else if (distanceTravelled >=2500)
        return 'cannot travel that far'
    else if (distanceTravelled > 400 && distanceTravelled <=2000){
        distanceTravelled=distanceTravelled-400;
        return (distanceTravelled*0.02)
    }
    else if (distanceTravelled > 2000 && distanceTravelled <=2500){
        return 25
    }
}
