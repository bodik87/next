"use client";

import useShow from "../lib/useShow";

export default function Head({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 const { show, scrollUp } = useShow()
 return (
  <header className={`${show && !scrollUp && "-translate-y-[110%]"}`}>{children}</header>
 )
}
