import styles from './footer.module.css';

export default function Footer() {
  const {footerContainer, title} = styles;
  return (
    <div className={footerContainer}>
      <h5 className={title}>Hi, i am a Footer!</h5>
    </div>
  );
}
