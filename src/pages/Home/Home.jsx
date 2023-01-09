import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import CharacterList from '../../components/ListOfCards/CharacterList';

export default function Home() {
  const query = gql`
    query Character($page: Int) {
      characters(page: $page) {
        info {
          count
          pages
          next
          prev
        }
        results {
          name
          id
          image
        }
      }
    }
  `;

  const [page, setPage] = useState(1);
  const { data, loading } = useQuery(query, { variables: { page } });

  return (
    <div className="mt-4 mb-5">
      <div className="container mt-3">
        <CharacterList
          data={data?.characters?.results || []}
          loading={loading}
          info={data?.characters?.info}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
