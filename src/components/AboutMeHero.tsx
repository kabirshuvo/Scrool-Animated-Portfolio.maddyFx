// import { useInView, motion } from 'framer-motion';
// import { useRef } from 'react';
// import { slideUp, opacity } from './animation';

// export default function Index() {
//     const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
//     const description = useRef(null);
//     const isInView = useInView(description);

//     return (
//         <div ref={description} className="px-20 pt-20 pb-10 flex justify-center">
//             <div className="max-w-7xl flex gap-10 relative">
//                 <p className="m-0 text-3xl leading-loose">
//                     {
//                         phrase.split(" ").map((word, index) => (
//                             <span className="relative inline-block">
//                                 <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span>
//                             </span>
//                         ))
//                     }
//                 </p>
//                 <motion.p variants={opacity} animate={isInView ? "open" : "closed"} className="text-lg font-light w-4/5">The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</motion.p>
//                 <div data-scroll data-scroll-speed={0.1} className="relative">
//                     <div className="top-4/5 left-0 absolute w-24 h-24 bg-gray-900 text-white rounded-full flex items-center justify-center cursor-pointer">
//                         <p className="m-0 text-base font-light">About me</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
