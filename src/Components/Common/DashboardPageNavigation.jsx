import React from "react";
import { useTranslation } from "react-i18next";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const DashbordPageNavigation = ({
  currentPage = 1,
  totalCount = 0,
  perPage = 10,
  handlePageChange = () => {},
}) => {
  if (totalCount === 0) return null;

  if (!totalCount) throw new Error("totalCount is required");
  const { t } = useTranslation();
  const totalPages = Math.ceil(totalCount / perPage);

  return (
    <Pagination>
      <PaginationItem disabled={currentPage === 1}>
        <PaginationLink
          previous
          onClick={() => handlePageChange(currentPage - 1)}
        >
          {t("Prev")}
        </PaginationLink>
      </PaginationItem>
      {[...Array(totalPages).keys()].map((page) => (
        <PaginationItem key={page + 1} active={currentPage === page + 1}>
          <PaginationLink onClick={() => handlePageChange(page + 1)}>
            {page + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem disabled={currentPage === totalPages}>
        <PaginationLink next onClick={() => handlePageChange(currentPage + 1)}>
          {t("Next")}
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default DashbordPageNavigation;
