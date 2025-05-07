import { useTranslation } from "react-i18next";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { Alert, Button } from "reactstrap";

export const EmptyState = ({
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
      {accessPermission.create ? (
        <tr>
          <td>
            <Link to={createLink}>
              <Button
               
                className="add-btn buttonui me-1"
                id="create-btn"
                size="lg"
                disabled={disabled}
              >
                <IoMdAdd size={20} className="me-1" />
                {t("Create")}
              </Button>
            </Link>
          </td>
        </tr>
      ) : null}
    </div>
  );
};
