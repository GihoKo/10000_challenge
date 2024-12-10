export const PAGE_TRANSITION_VARIANTS = {
    up: {
        initial: {
            opacity: 0,
            y: 30,
        },
        animate: {
            opacity: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            y: 30,
        },
    },
    left: {
        initial: {
            opacity: 0,
            x: -30,
        },
        animate: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            x: -30,
        },
    },
};
