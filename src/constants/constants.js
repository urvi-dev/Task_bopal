export const STATUS_CODE = {
    success : 200,
    internalServerError : 500,
    notFound : 404,
    badRequest : 400,
    unauthorized : 401
}

export const COOKIE_NAME = {
    accessToken : 'access_token'
}

export const initialData = {
    search: {
      keyword: "",
    },
    page: 1,
    pageSize: 50,
  };

export const defaultStateValue = {
    showDeleteModal: false,
    deletedItem: null,
    currentPage: initialData.page,
    searchTerm: initialData.search,
    apiData: {
        data: [],
        metadata: { totalCount: 0 },
    },
    isLoading: false,
  }

  // export const featurePermissions = [
  //   { id: 1, feature: "Admin", permissions: [], isAdminRole:true },
  //   { id: 2, feature: "Categories", permissions: [] },
  //   { id: 3, feature: "Units", permissions: [] },
  //   { id: 4, feature: "Locations", permissions: [] },
  //   {
  //     id: 5,
  //     feature: "Warehouses",
  //     permissions: [],
  //     dropdown:true,
  //     placeholder : 'Provide Dropdown of Warehouses to Select One'
  //   },
  //   { id: 6, feature: "Products", permissions: [] },
  //   { id: 7, feature: "Vendors", permissions: [] },
  //   { id: 8, feature: "Vendors Products", permissions: [] },
  //   { id: 9, feature: "Purchase Orders", permissions: [] },
  //   { id: 10, feature: "Purchase Receives", permissions: [] },
  //   { id: 11, feature: "Sales Orders", permissions: [] },
  //   { id: 12, feature: "Requisition Requests", permissions: [] },
  //   { id: 13, feature: "New Products Requisition Requests", permissions: [] },
  //   { id: 14, feature: "Transfer Requests", permissions: [] },
  //   { id: 15, feature: "Transfer Receives", permissions: [] },
  //   { id: 16, feature: "Users", permissions: [] },
  // ];

  export const featurePermissions = [
    { id: 1, feature: "Admin", permissions: [], isAdminRole:true },
    { id: 2, feature: "Categories", permissions: [] },
    { id: 3, feature: "Contests", permissions: [] },
    { id: 4, feature: "Locations", permissions: [] },
    { id: 5, feature: "Teams", permissions: [] },
    { id: 6, feature: "Players", permissions: [] },
    { id: 7, feature: "Matches", permissions: [] },
    { id: 8, feature: "Users", permissions: [] },
  ];

  export const getInitials = (firstName, lastName) => {
    return (
      (firstName ? firstName[0].toUpperCase() : '') +
      (lastName ? lastName[0].toUpperCase() : '')
    );
  }

  export const dateFormat = 'YYYY-MM-DD HH:mm:ss'
    // export const dateFormat2 = 'MM-DD-YYYY'

  export const title ='Task'