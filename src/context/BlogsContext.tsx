import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { IBlog } from "../interfaces/Blog";
import { getBlogs } from "../services/apiBlogs";

interface BlogContextType {
  blogs: IBlog[] | undefined;
  isLoading: boolean;
}

const BlogsContext = createContext<BlogContextType | undefined>(undefined);

function BlogsProvider ({ children }: { children: React.ReactNode; }) {
  const { data: blogs, isLoading } = useQuery<IBlog[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  return (
    <BlogsContext.Provider value={{ blogs, isLoading }}>
      {children}
    </BlogsContext.Provider>
  );
}

const useBlogs = () => {
  const context = useContext(BlogsContext);
  if (context === undefined) throw new Error("BlogContext must be used within a BlogProvider");
  return context;
};

export { BlogsProvider, useBlogs }