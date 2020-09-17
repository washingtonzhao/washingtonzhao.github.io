const breakpoints = [575.98, 767.98, 991.98, 1199.98];

/*
@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { ... }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { ... }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { ... }
*/

const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
);

export default mq;
