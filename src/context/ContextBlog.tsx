import { createContext, useContext } from "react";
import { getBlogs } from "../services/apiBlogs";
import { useQuery } from "@tanstack/react-query";
import { IBlog } from "../interfaces/Blog";

interface BlogContextType {
  blogs: IBlog[] | undefined;
  isLoading: boolean;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: blogs, isLoading } = useQuery<IBlog[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  return (
    <BlogContext.Provider value={{ blogs, isLoading }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);

  if (context === undefined) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return context;
};
