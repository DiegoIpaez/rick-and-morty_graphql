import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavItem({ title, path, disabled, styles }) {

  const defaultStyle = 'nav-link';
  const [style, setStyle] = useState(defaultStyle);

  useEffect(() => {
    const getStyles = () => {
      const disabledStyle = 'disabled';
      if (styles && disabled) return `${styles} ${disabledStyle}`;
      if (styles) return styles;
      if (disabled) return `${defaultStyle} ${disabledStyle}`;
      return defaultStyle;
    };
    const styleData = getStyles();
    setStyle(styleData);
  }, [disabled, styles])

  return (
    <li className="nav-item">
      <Link to={path || '*'} className={style}>
        {title || 'default'}
      </Link>
    </li>
  );
}
