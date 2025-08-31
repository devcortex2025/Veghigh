import { Newspaper, Calendar, User, ArrowRight, Leaf, TrendingUp, Award } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "VegHigh Expands to New Areas in Alwar",
      excerpt: "We're excited to announce that VegHigh is now serving more neighborhoods in Alwar, bringing fresh vegetables to even more families.",
      content: "Our expansion includes new delivery routes covering additional pin codes in Alwar. This means more families can now enjoy our farm-fresh vegetables delivered right to their doorstep. Our commitment to quality and freshness remains unchanged as we grow.",
      date: "December 15, 2024",
      author: "VegHigh Team",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "The Benefits of Organic Farming: Why We Choose Sustainable Practices",
      excerpt: "Discover why organic farming is crucial for our health and the environment, and how VegHigh supports sustainable agriculture.",
      content: "Organic farming eliminates the use of harmful pesticides and chemicals, ensuring that the vegetables you consume are not only nutritious but also safe for your family. Our partner farms use traditional farming methods combined with modern sustainable practices to produce the highest quality vegetables.",
      date: "December 10, 2024",
      author: "Agricultural Expert",
      category: "Health & Wellness",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Seasonal Vegetables Guide: What's Fresh This Winter",
      excerpt: "Winter brings a variety of nutritious vegetables. Learn which seasonal vegetables are available and their health benefits.",
      content: "Winter vegetables like spinach, mustard greens, carrots, and radishes are not only delicious but also packed with essential nutrients. These vegetables help boost immunity during the cold season and provide the vitamins and minerals your body needs.",
      date: "December 5, 2024",
      author: "Nutrition Specialist",
      category: "Seasonal Guide",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Customer Success Story: The Sharma Family's Journey to Healthy Eating",
      excerpt: "Meet the Sharma family who transformed their eating habits with VegHigh's fresh vegetables and improved their overall health.",
      content: "The Sharma family started ordering from VegHigh six months ago and noticed significant improvements in their energy levels and overall health. Their children now enjoy eating vegetables, and the family has reduced their dependency on processed foods.",
      date: "November 28, 2024",
      author: "Customer Relations",
      category: "Customer Stories",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "VegHigh Receives 'Best Organic Produce Provider' Award",
      excerpt: "We're honored to receive recognition for our commitment to providing the highest quality organic vegetables to our customers.",
      content: "This award recognizes our dedication to quality, sustainability, and customer satisfaction. It motivates us to continue improving our services and maintaining the high standards that our customers expect from VegHigh.",
      date: "November 20, 2024",
      author: "VegHigh Team",
      category: "Awards & Recognition",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "How to Store Vegetables for Maximum Freshness",
      excerpt: "Learn the best practices for storing different types of vegetables to maintain their freshness and nutritional value.",
      content: "Proper storage is key to preserving the freshness and nutrients of your vegetables. Different vegetables require different storage conditions. For example, leafy greens should be stored in the refrigerator with slightly damp paper towels, while root vegetables can be stored in a cool, dark place.",
      date: "November 15, 2024",
      author: "Food Storage Expert",
      category: "Tips & Tricks",
      image: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "Company News", "Health & Wellness", "Seasonal Guide", "Customer Stories", "Awards & Recognition", "Tips & Tricks"];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-background via-green-50/30 to-orange-50/20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-fresh-green/20 to-fresh-orange/20 px-6 py-3 rounded-full mb-6">
            <Newspaper className="w-5 h-5 text-fresh-green" />
            <span className="text-sm font-medium text-fresh-green">Latest News</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            VegHigh News
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest news, insights, and stories from VegHigh. 
            From company updates to health tips, discover everything about fresh vegetables and sustainable farming.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 text-gray-700 hover:bg-fresh-green hover:text-white transition-all duration-300 font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-fresh-green/20 text-fresh-green text-sm font-medium rounded-full">
                    {newsArticles[0].category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {newsArticles[0].date}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">{newsArticles[0].title}</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">{newsArticles[0].content}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {newsArticles[0].author}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <img 
                  src={newsArticles[0].image} 
                  alt={newsArticles[0].title}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.slice(1).map((article) => (
            <article 
              key={article.id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50"
            >
              <div className="mb-4">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-fresh-green/20 text-fresh-green text-xs font-medium rounded-full">
                  {article.category}
                </span>
                <span className="text-gray-500 text-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">{article.title}</h3>
              <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {article.author}
                </span>
                <button className="text-fresh-green hover:text-green-600 transition-colors duration-200 flex items-center gap-1">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-fresh-green/10 via-green-100/20 to-fresh-orange/10 rounded-3xl p-8 border border-white/50">
            <h3 className="text-2xl font-bold text-primary mb-4">Stay Updated</h3>
            <p className="text-lg text-gray-700 mb-6">
              Subscribe to our newsletter for the latest news, seasonal tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border-2 border-gray-200 focus:border-fresh-green focus:outline-none transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-fresh-green hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News; 