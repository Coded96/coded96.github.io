import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

export const PrivateRoute = ({ children }: { children: any }) => {
    const { session } = useAuth();
    if (!session) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return children;
};