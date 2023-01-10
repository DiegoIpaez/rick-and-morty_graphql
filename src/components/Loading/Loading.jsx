import { containerLoading, sizeOfLoading } from './loading.module.css'
export default function Loading({ styles }) {
  const defaultStyle = `${sizeOfLoading} spinner-border`;
  return (
    <div className={containerLoading}>
      <div className={styles || defaultStyle} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
