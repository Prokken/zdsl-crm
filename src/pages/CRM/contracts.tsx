// mock data
import {
  MainBottomContent,
  MainContent,
  MainMiddleContent,
  MainTopContent,
} from "@/layout/mainContentLayout";

function Contracts() {
  return (
    <MainContent>
      <MainTopContent className="py-4"></MainTopContent>

      <MainMiddleContent className="h-[85%] w-full rounded-sm  "></MainMiddleContent>
      <MainBottomContent className="p-5">Pagination</MainBottomContent>
    </MainContent>
  );
}

export default Contracts;
