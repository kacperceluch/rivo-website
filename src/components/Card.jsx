import { ReactComponent as Star} from "../assets/star.svg"

const Card = (props) => {
    return (
        <article className="card">
            <div className="img-container">
                <img src={props.image} alt="" />
            </div>
           
            <div className="card-text">
                <p className="item-title">{props.title}</p>
                <div className="price">
                    <p>${props.price}</p>
                    <div className="line"></div>
                    <div className="rating">
                        <p>{props.rating}</p>
                        <Star />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card;