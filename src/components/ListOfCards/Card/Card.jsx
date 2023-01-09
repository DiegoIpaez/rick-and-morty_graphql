import { Link } from 'react-router-dom';
import { dataStyle, textName } from './card.module.css'

export default function Card(props) {
  const { image, name, linkTo } = props;
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-2">
      <Link to={linkTo} style={{ textDecoration: 'none' }}>
        <div className={dataStyle}>
          <img
            src={
              image
                ? image
                : 'https://png.pngtree.com/png-vector/20210219/ourlarge/pngtree-colorful-neon-glitch-404-text-png-image_2928701.jpg'
            }
            className="img-fluid w-100 rounded-top"
          />
          <div>
            <div className={textName} style={{ color: '#000' }}>
              {name}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
