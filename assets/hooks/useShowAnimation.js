import {useEffect, useRef} from "react";
import {Animated, ScrollView} from "react-native";

export function useShowAnimation(isShown, maxHeight = 60) {
    const aniValue = useRef({
        maxHeight: new Animated.Value(isShown ? maxHeight : 0),
        opacity: new Animated.Value(isShown ? 1 : 0),
        overflow: "hidden",
        display: "block",
});
    const animationObj = useRef({
        stop() {
        }
    });
    useEffect(() => {
        if (aniValue.current.opacity) {
            const aniArr = [
                Animated.timing(
                    aniValue.current.opacity, // The value to drive
                    {
                        toValue: isShown ? 1 : 0, // Animate to final value of 1
                        duration: 500,
                    },
                ),
                Animated.timing(
                    aniValue.current.maxHeight, // The value to drive
                    {
                        toValue: isShown ? maxHeight : 0, // Animate to final value of 1
                        duration: 500,
                    },
                )
            ];

            if (isShown) aniArr.reverse();
            animationObj.current.stop();
            animationObj.current = Animated.sequence(aniArr);
            animationObj.current.start();
        }
    }, [isShown]);

    return aniValue.current
}