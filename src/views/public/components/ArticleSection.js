import CardArticle from './CardArticle';
import dbTextArticles from '../../../assets/db/dbTextArticles';
import HeadlineLarge from '../../../components/sub-components/HeadlineLarge';


export default function ArticleSection() {
    return (
        <section className="articles">
            <div className="wrapper">
                <HeadlineLarge
                        content={{
                            title: 'Business Resources',
                            subtitle: 'Check our latest articles',
                        }}
                />
                <div className="article-container">
                    { dbTextArticles.map((article) => {
                        return <CardArticle
                                    key={article.id}
                                    content={{...article}}
                                />;
                        })
                    }
                </div>
            </div>
        </section>
    );
}
