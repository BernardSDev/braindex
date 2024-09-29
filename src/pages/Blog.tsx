import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Blog() {
    return (
        <div>
            <Header />
            <main className="bg-cyan-700 px-4 py-8">
                <h1>Title</h1>
                <h1>Excerpt</h1>
                <img src="/images/bernard.jpg" alt="bernard-avater" width={35} height={35}/>
                <p>Author</p>
                <p>Published on <span>September 29, 24</span> - <span>3 min read</span></p>
                <img src="/images/light-fire.jpg" alt="light-fire"/>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat mauris leo, vel porttitor
                    orci bibendum eget. Aenean vulputate purus et velit consequat, vel iaculis sem suscipit. Donec vel
                    scelerisque lorem. Nam erat libero, maximus eleifend dignissim at, placerat eget urna. Aenean auctor
                    aliquet odio tristique convallis. Aliquam auctor metus ac mauris laoreet, tempor blandit nisl
                    rutrum. Nullam et erat convallis, posuere elit in, lacinia ipsum. Aliquam tristique, quam ac
                    pharetra ultrices, turpis quam finibus ipsum, at accumsan mauris est ac eros. Nunc aliquet et turpis
                    vel mattis. Vestibulum ultricies elit mi, ac fringilla nulla suscipit sit amet. Mauris id nulla eu
                    nunc feugiat facilisis. Sed et augue semper, congue tellus ut, condimentum erat. Sed congue lacus in
                    felis molestie ornare. Fusce euismod pretium ex, id cursus neque tincidunt vel. Curabitur vulputate
                    mattis tellus, vitae lacinia est accumsan quis.
                </div>
            </main>
            <Footer />
        </div>
    )
}