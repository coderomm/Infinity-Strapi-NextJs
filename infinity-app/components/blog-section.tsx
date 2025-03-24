import Image from "next/image"
import Link from "next/link"
import BlogPostImg from '@/public/images/BlogPost.png'

export default function BlogSection() {
    const blogPosts = [
        {
            id: 1,
            title: "How Online Learning is Transforming Education",
            category: "Education",
            date: "January 27, 2025",
            readTime: "4 min read",
            image: BlogPostImg,
        },
        {
            id: 2,
            title: "Top 5 Skills to Future-Proof Your Career in 2025",
            category: "Education",
            date: "January 27, 2025",
            readTime: "4 min read",
            image: BlogPostImg,
        },
        {
            id: 3,
            title: "The Secrets Behind Learning from Industry Experts",
            category: "Education",
            date: "January 27, 2025",
            readTime: "4 min read",
            image: BlogPostImg,
        },
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-12">
                DO YOU WRITE BLOGS
                <br className="hidden sm:block" /> OR DO PODCASTS?
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Link href="#" key={post.id} className="group">
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
                            <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
                                <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <span className="inline-block text-purple-600 text-sm font-medium mb-2">{post.category}</span>
                                <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                                    {post.title}
                                </h2>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span>{post.date}</span>
                                    <span className="mx-2">|</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-8 rounded-full transition-colors">
                    See all
                </button>
            </div>
        </div>
    )
}