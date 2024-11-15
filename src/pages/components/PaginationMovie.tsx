import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export type PaginationProps = {
  totalPage: number;
  pageRanges: number;
  type: string| undefined;
};

export function PaginationMovie({ totalPage, pageRanges, type}: PaginationProps) {

  const [currentPage, setCurrentPage] = useState(1);
  const params = useParams();
  const navigator = useNavigate();
  const handleNextPage = () => {
    if (Number(params.page) <= totalPage) {
      navigator(`/${type}/${Number(params.page) + 1}`);
      setCurrentPage(Number(params.page) + 1);
    }
  };
  const handlePrevPage = () => {
    if (Number(params.page) > 1) {
      navigator(`/${type}/${Number(params.page) - 1}`);
      setCurrentPage(Number(params.page) - 1);
    }
  };

  const handleChoisePage = (page: number, idx: number) => {
    if (idx > 2) {
      setCurrentPage(page - 1);
    }
    navigator(`/${type}/${page}`);
  };

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevPage} />
        </PaginationItem>
        <PaginationItem>
          {Array.from({ length: pageRanges }).map((_, idx) => (
            <PaginationLink
              className={cn(
                "mx-1",
                currentPage + idx === Number(params.page) &&
                  "bg-white text-black"
              )}
              onClick={() => handleChoisePage(currentPage + idx, idx)}
              key={`currentPage-${currentPage + idx}`}
            >
              {currentPage + idx}
            </PaginationLink>
          ))}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={handleNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
