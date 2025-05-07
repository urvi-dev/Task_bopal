export const STATUS_INFO = {
    CREATED: { percent: 25, color: "primary" },
    SENT: { percent: 50, color: "info" },
    "PARTIALLY-RECEIVED": { percent: 75, color: "warning" },
    RECEIVED: { percent: 100, color: "success" },
  };

export const TRANSFER_STATUS_INFO = {
    SENT: { percent: 50, color: "info" },
    RECEIVED: { percent: 100, color: "success" },
  };

  export const findSelectedLocation = (locations, locationId) =>
    locations.find((location) => location.value === locationId)?.label || "N/A";
  
  export const createCategoryMap = (categories) => {
    const map = new Map();
    const traverse = (category) => {
      map.set(category.value, category);
      category.children?.forEach(traverse);
    };
    categories.forEach(traverse);
    return map;
  };
  
  export const findCategoryById = (categoryMap, categoryId) =>
    categoryMap.get(categoryId) || null;