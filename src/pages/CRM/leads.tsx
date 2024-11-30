import {
  MainBottomContent,
  MainContent,
  MainMiddleContent,
  MainTopContent,
} from "@/layout/mainContentLayout";

function Leads() {
  return (
    <MainContent className="h-full ">
      <MainTopContent className="bg-red-200">filter</MainTopContent>
      <MainMiddleContent className="bg-red-400  ">pagination</MainMiddleContent>

      <MainBottomContent className="bg-red-300">pagination</MainBottomContent>
    </MainContent>
  );
}

export default Leads;
