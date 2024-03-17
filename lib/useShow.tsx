import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from 'react';

export default function useShow() {

 const { scrollY }: any = useScroll();

 const [scrollUp, setScrollUp] = useState(true);
 const [show, setShow] = useState(false);

 useMotionValueEvent(scrollY, "change", (latest: any) => {
  const previousScrollY = scrollY.getPrevious();
  if (latest > previousScrollY && scrollY.current > 50) {
   setScrollUp(false);
  } else {
   setScrollUp(true);
  }

  if (scrollY.current > 32) {
   setShow(true);
  } else {
   setShow(false);
  }
 });

 return { show, scrollUp }

}



