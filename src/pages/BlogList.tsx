import BlogItem from "../components/BlogItem.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import BlogListHeading from "../components/BlogListHeading.tsx";

export default function BlogList() {
    return (
        <div>
            <Header />
            <BlogListHeading />
            <main className="p-2 bg-orange-100">
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </main>
            <Footer />
        </div>
    )
}