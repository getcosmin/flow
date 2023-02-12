import PropTypes from 'prop-types';


export default function CardArticle({content}) {
    return (
        <div className="card-art">
            <div className="card-art-header">
                <img className="card-art-image" src={content.img} width="" height="" alt="" />
            </div>
            <div className="card-art-body">
                <header>
                    <time className="card-art-date">{content.date}</time>
                    <h3 className="card-art-tile">{content.title}</h3>
                </header>
                <p>{content.body}</p>
            </div>
            <div className="card-art-footer">
                <a role="button" className="card-art-link">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12,1.5c5.8,0,10.5,4.7,10.5,10.5S17.8,22.5,12,22.5S1.5,17.8,1.5,12S6.2,1.5,12,1.5 M12,0C5.4,0,0,5.4,0,12
                            s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0L12,0z M12.5,6.6L12.5,6.6c-0.3,0.3-0.4,0.7-0.1,1.1l3,3.6H7c-0.4,0-0.7,0.3-0.7,0.7v0
                            c0,0.4,0.3,0.7,0.7,0.7h8.4l-3,3.6c-0.3,0.3-0.2,0.8,0.1,1.1l0,0c0.3,0.3,0.8,0.2,1.1-0.1l4-4.8c0.2-0.3,0.2-0.7,0-1l-4-4.8
                            C13.3,6.4,12.8,6.4,12.5,6.6z"></path>
                        </svg>
                    Check Article
                </a>
            </div>
        </div>
    );
}

CardArticle.propTypes = {
    content: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }),
};

