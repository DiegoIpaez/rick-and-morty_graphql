import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import CharacterList from '../../components/ListOfCards/CharacterList';
import Search from '../../components/Search/Search';

export default function Home() {
  const query = gql`
    query Character($page: Int, $name: String) {
      characters(page: $page, filter: { name: $name }) {
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
  const [search, setSearch] = useState('');

  const { data, loading } = useQuery(query, {
    variables: { page, name: search },
  });

  const searchInputTitle = 'Search you favorite character...';

  useEffect(() => setPage(1), [search]);

  return (
    <div className="mt-4 mb-5">
      <Search search={search} setSearch={setSearch} title={searchInputTitle} />
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
