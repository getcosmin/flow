import {Link} from "react-router-dom";

export default function ButtonLink({ url, cta, className }) {
    return (
      <Link to={url} className={className}>
          {cta}
      </Link>
    );
}