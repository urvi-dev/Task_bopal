const authUser = JSON.parse(localStorage.getItem("authUser"))
const userPermissions = authUser?.data?.role[0]?.permissions || [];
// console.log('authUser: ', authUser);
const isAdmin = authUser?.data?.role[0]?.isAdmin || false;
const isSuperAdmin = authUser?.data?.role.length === 0

// Helper function to get permissions by feature name
export const getFeaturePermissions = (feature) => {
    if (isSuperAdmin) {
        return { create: true, update: true, delete: true, read: true, isSuperAdmin: true };
    }
    if (isAdmin) {
        return { create: true, update: true, delete: true, read: true, isAdmin: true };
    }
    const featurePermissions = userPermissions.find((perm) => perm.feature === feature);
    
    // Check if the feature is "warehouses" and include warehouse_id
    if (feature === "warehouses") {
        return {
            ...featurePermissions?.action,
            warehouse_id: featurePermissions?.warehouse_id || null // Add warehouse_id if available
        };
    }

    return featurePermissions ? featurePermissions.action : { create: false, update: false, delete: false, read: false };
};
