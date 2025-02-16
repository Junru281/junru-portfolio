const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  highlightText: "text-[#915eff] font-semibold",
  tag: {
    // This clip-path creates a shape with a notch on the right:
    clipPath: "polygon(0% 0%, 100% 0%, 90% 50%, 100% 100%, 0% 100%)",
    backgroundColor: "#10B981", // e.g. Tailwind's emerald-500
    color: "#fff",
    fontSize: "0.875rem", // text-sm
    fontWeight: "700",   // font-bold
    padding: "0.5rem 1rem",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
};
  
  export { styles };