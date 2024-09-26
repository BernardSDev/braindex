import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AllRoutes } from "./routes/AllRoutes.tsx";

const queryClient = new QueryClient();

export default function App() {
    return(
        <QueryClientProvider client={queryClient}>
            <AllRoutes />
        </QueryClientProvider>
    )
}