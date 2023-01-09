import Card from './Card/Card';
import Pagination from './Pagination/Pagination';

export default function ListOfCards({ data, info, page, setPage }) {
  const linkTo = '/character';
  return (
    <>
      <Pagination page={page} setPage={setPage} info={info} />
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
    </>
  );
}
