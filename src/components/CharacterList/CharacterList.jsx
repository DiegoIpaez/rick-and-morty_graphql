import Card from './Card/Card';
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading';

export default function ListOfCards({ data, loading, info, page, setPage }) {
  const linkTo = '/character';
  return (
    <>
      <Pagination page={page || 0} setPage={setPage} info={info} />
      {loading ? (
        <Loading />
      ) : (
        <div className="row row-cols-1 row-cols-md-3">
          {data.length > 0 &&
            data.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                image={item.image}
                linkTo={`${linkTo}/${item.id}`}
              />
            ))}
        </div>
      )}
    </>
  );
}
