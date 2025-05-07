
import { useTranslation } from "react-i18next";
import { BsSearch } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Input, Row } from "reactstrap";

export const TableControls = ({
  searchTerm,
  onSearch,
  totalCount,
  createNav,
  children,
  showSearch = true,
  createDisabled = false,
  accessPermission = { create: true },
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return totalCount > 0 || searchTerm ? (
    <Row className="g-4 mb-3" style={{padding:'0px 10px 0px 16px'}}>
      {showSearch ? (
        <Col sm="auto" >
          <div className="search-box ms-2">
            <Input
              type="text"
              className="form-control search"
              placeholder={t("Search...")}
              value={searchTerm}
              onChange={onSearch}
            />
            <BsSearch className="search-icon" size={18} />
          </div>
        </Col>
      ) : null}
      {totalCount > 0 ? (
        <Col sm className="d-flex gap-1 justify-content-sm-end ">
          {children}
          {accessPermission.create ? (
            <Button
              onClick={() => navigate(createNav)}
              disabled={createDisabled}
             
              className="add-btn buttonui me-1"
              id="create-btn"
            >
              <IoMdAdd size={16} className="me-1" />
              {t("Create")}
            </Button>
          ) : null}
        </Col>
      ) : null}
    </Row>
  ) : null;
};

export const ActionRow = ({
  onDelete,
  editNav,
  children,
  isEdit = false,
  accessPermission = { update: true, delete: true },
}) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.stopPropagation();
    navigate(editNav);
  };
  return (
    <td>
      <div className="hstack gap-3">
        {children}
        {isEdit && accessPermission.update ? (
          <li
            onClick={handleClick}
            title="Edit"
            color="info"
            size="sm"
        
            style= {{color:"black" ,listStyleType:'none', cursor: "pointer"}}
          >
            <MdModeEdit size="18"  />
          </li>
        ) : null}
        {accessPermission.delete ? (
          <li
            title="Delete"
            color="danger"
            size="sm"
            onClick={onDelete}
            style= {{color:'#F06548',listStyleType:'none', cursor: "pointer"}}
          >
            <RiDeleteBin5Fill  size="18" />
          </li>
        ) : null}
      </div>
    </td>
  );
};

export const Delete = ({ onDelete }) => (
  <tr>
    <td>
      <div className="hstack gap-2">
        <li  style= {{color:'#F06548',listStyleType:'none', cursor: "pointer"}} outline size="sm" onClick={onDelete}>
        <RiDeleteBin5Fill  size="18" />
        </li>
      </div>
    </td>
  </tr>
);


export const TableSearchControls = ({ searchTerm, onSearch }) => {
    const { t, i18n } = useTranslation();
    return (
      <Row className="searchboxui">
        <Col sm={12}>
          <div className="search-box ms-2">
            <Input
              type="text"
              className="form-control search"
              placeholder={t("Search...")}
              value={searchTerm}
              onChange={onSearch}
            />
            <BsSearch className="search-icon" size={18} />
          </div>
        </Col>
      </Row>
    );
  };

export const UserRow = ({ item, onDelete, editNav }) => (
  <tr>
    <td>{item.first_name.en}</td>
    <td>{item.last_name.en}</td>
    <td>{item.email}</td>
    <td>
      <div className="hstack gap-2">
        <Link to={editNav}>
          <Button color="info" size="sm" outline>
            <CiEdit size="18" />
          </Button>
        </Link>
        <Button color="danger" outline size="sm" onClick={onDelete}>
          <MdDelete size="18" />
        </Button>
      </div>
    </td>
  </tr>
);
