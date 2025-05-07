import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import { EmptyState } from "@/Components/Common/EmptyState";
import { getUsers, deleteUser } from "../../../slices/thunks";
import {
  TableControls,
  ActionRow,
  TableSearchControls,
} from "@/Components/Common/TableControls";
import {
  Container,
  Card,
  CardBody,
  CardHeader,
  Table,
  Col,
  Row,
} from "reactstrap";
import {
  defaultStateValue,
  initialData,
  STATUS_CODE,
  title,
} from "../../../constants/constants";
import dayjs from "dayjs";
import { getFeaturePermissions } from "@/helpers/user-permission";
import useTitle from "@/hooks/useTitle";
import useDebounce from "@/hooks/useDebounce";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DeleteModal from "../../../Components/Common/DeleteModal";
import PageNavigation from "../../../Components/Common/PageNavigation";
import TableLoadingSpinner from "../../../Components/Common/TableLoadingSpinner";
import EditUserModal from "./update";

const DashboardEcommerce = () => {
 
  useTitle("Users" + " | " + title);
  const dispatch = useDispatch();
  const userPermission = getFeaturePermissions("users");
  const [state, setState] = useState(defaultStateValue);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = useCallback(
    (updatedData = {}) => {
      setState((prev) => ({ ...prev, isLoading: true }));

      const payloadToSend = {
        page: updatedData.page || state.currentPage,
        search: updatedData.search || state.searchTerm,
      };

      dispatch(getUsers(payloadToSend))
        .then((res) => {
          const users = res.payload?.data || [];
          const total = res.payload?.metadata?.totalCount || users.length;

          if (res.payload?.status === 200 || res.payload?.success) {
            setState((prev) => ({
              ...prev,
              apiData: {
                data: users,
                metadata: { totalCount: total },
              },
              isLoading: false,
            }));
          } else {
            setState((prev) => ({
              ...prev,
              apiData: { data: [], metadata: { totalCount: 0 } },
              isLoading: false,
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
          setState((prev) => ({
            ...prev,
            apiData: { data: [], metadata: { totalCount: 0 } },
            isLoading: false,
          }));
        });
    },
    [dispatch, state.currentPage, state.searchTerm]
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };
  const delayedFetchUsers = useDebounce(fetchUsers, 500);

  const handleDeleteUser = useCallback(() => {
    if (state.deletedItem) {
      dispatch(deleteUser(state.deletedItem._id)).then((res) => {
        if (res.payload.status === STATUS_CODE.success) {
          fetchUsers();
          setState(defaultStateValue);
        }
      });
    }
  }, [state.deletedItem, dispatch, fetchUsers]);

  const handlePageChange = useCallback(
    (page) => {
      delayedFetchUsers({ page });
      setState((prev) => ({ ...prev, currentPage: page }));
    },
    [delayedFetchUsers]
  );

  const TableContent = () => {
    if (state.isLoading) return <TableLoadingSpinner />;

    return (
      <>
        <thead className="table-light text-muted">
          <tr>
            <th width="15%">{"Name"}</th>
            <th width="15%">{"Email"}</th>
            <th width="15%">{"Number"}</th>
            <th width="15%">{"Gender"}</th>
            <th width="15%">{"Is admin"}</th>
            <th width="10%">{"Action"}</th>
          </tr>
        </thead>
        <tbody>
          {state.apiData.data?.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.number}</td>
              <td>{item.gender}</td>
              <td>{item.is_admin}</td>

              <td className="d-flex gap-2">
                {userPermission.update && (
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                )}
                {userPermission.delete && (
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={() =>
                      setState((prev) => ({
                        ...prev,
                        showDeleteModal: true,
                        deletedItem: item,
                      }))
                    }
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </>
    );
  };

  return (
    <>
      <DeleteModal
        show={state.showDeleteModal}
        onDeleteClick={handleDeleteUser}
        onCloseClick={() =>
          setState((prev) => ({ ...prev, showDeleteModal: false }))
        }
      />
      <EditUserModal
        isOpen={editModalOpen}
        toggle={() => setEditModalOpen(!editModalOpen)}
        userData={selectedUser}
        onSuccess={() => fetchUsers()} // to refresh data
      />

      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Users" pageTitle="" />
          <Card>
            <CardHeader style={{ padding: "16px 16px 0px 16px" }}>
              <Row>
                <Col lg={9}>
                  <h4
                    className="card-title mb-4"
                    style={{ padding: "12px 0px 0px 0px" }}
                  >
                    {"Users"}
                  </h4>
                </Col>
              
              </Row>
            </CardHeader>
            <CardBody style={{ padding: "16px 0px 16px 0px" }}>
              
              <Table className="unit-table" responsive hover>
                <TableContent />
              </Table>

              <div className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                <PageNavigation
                  totalCount={state.apiData.metadata.totalCount}
                  handlePageChange={handlePageChange}
                  currentPage={state.currentPage}
                />
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    
    </>
  );
};

export default DashboardEcommerce;
