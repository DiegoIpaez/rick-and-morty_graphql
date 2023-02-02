import styles from './footer.module.css';

export default function Footer() {
  const { footerContainer, title } = styles;
  return (
    <div className={footerContainer}>
      <a
        style={{ textDecoration: 'none' }}
        href="https://github.com/DiegoIpaez?tab=repositories"
        target="_blank">
        <h5 className={title}>© DiegoIpaez</h5>
      </a>
    </div>
  );
}
