import { useTranslation } from "react-i18next";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { Alert, Button } from "reactstrap";

export const EmptyStateNoData = ({
  createLink,
  noText,
  disabled = false,
  accessPermission = { create: true },
}) => {
  const { t } = useTranslation();
  return (
    <div className="empty-state">
      <Alert color="info" className="mb-0 alert">
        {noText || t("noDataFound")}
      </Alert>
      
    </div>
  );
};
