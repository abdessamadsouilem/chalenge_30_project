import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;



export const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export const getPipeSizePosPair = (addToPosx = 0) => {
    let yPostTop = - getRandom(300, windowHeight - 100);


    const pipeTop = {
        pos: { x: windowWidth + addToPosx, y: yPostTop },
        size: { width: 75, height: windowHeight * 2 }
    }

    const pipeBottom = {
        pos: { x: windowWidth + addToPosx, y: windowHeight * 2 + yPostTop + 200 },
        size: { width: 75, height: windowHeight * 2 }
    }

    return {
        pipeTop,
        pipeBottom
    }



}