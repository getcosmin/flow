import {Link} from "react-router-dom";

export default function ButtonSecondary({ url, cta }) {
    return (
      <Link to={url} className="button-secondary">
          {cta}
      </Link>
    );
}