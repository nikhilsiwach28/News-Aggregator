const YOUR_API_KEY = 'adc55bfa5800453c926cd1505bb2fa36'

class NewsService {
    constructor(newsRepository) {
      this.newsRepository = newsRepository;
    }
  
    addNewsArticle(newsArticle) {
      this.newsRepository.addNewsArticle(newsArticle);
      // Additional logic for adding news articles
    }
  

    getNewsOnPreferences(preferences){
      return fetchNews(preferences)
    }
    // Implement other news-related services
  }


  const fetchNews = async (preferences) => {
    try {
        const newsData = {};
  
        // Iterate through each preference and fetch news
        await Promise.all(preferences.map(async preference => {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${preference}&apiKey=adc55bfa5800453c926cd1505bb2fa36`);
            const data = await response.json();
            newsData[preference] = data.articles;
        }));
  
        return newsData; // Return the compiled news data
    } catch (error) {
        throw new Error('Error fetching news: ' + error.message);
    }
  };
  
  module.exports = NewsService;
  