import styles from './character.module.css';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Loading from '../../components/Loading/Loading';
const Character = () => {
  const { id } = useParams();
  const query = gql`
    query Character($id: ID!) {
      character(id: $id) {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
          created
        }
        location {
          id
          name
          type
          dimension
        }
        image
        episode {
          id
          name
          air_date
          episode
          created
        }
        created
      }
    }
  `;
  const { data, loading } = useQuery(query, {
    variables: { id },
  });
  
  if (loading) {
    return (
      <>
        <div className={`bg-secondary container mt-5 px-0 rounded shadow mb-2`}>
          <div className="row px-0 mx-0">
            <div className={`${styles.containerLoading} col-auto px-0`}>
              <Loading
                styles={'spinner-border'}
                containerStyle={styles.loading}
              />
            </div>
            <div className="col-8 mt-5">
              <p class="card-text placeholder-glow mt-2 ps-5">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-4"></span>
              </p>
            </div>
          </div>
        </div>
        <div className="container px-0 mt-4 mb-5 shadow px-3 py-3 rounded">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container bg-secondary mt-5 px-0 rounded shadow mb-2">
        <div className="row mx-0">
          <div className="col-md-6 col-xl-4 px-0">
            <img className="rounded-start" src={data?.character.image} alt="" />
          </div>
          <div className="col-auto px-0 text-white ms-5 mt-5">
            <p>Name: {data?.character?.name}</p>
            <p>Species: {data?.character?.species}</p>
            <p>Gender: {data?.character?.gender}</p>
            <p>Status: {data?.character?.status}</p>
            <p>
              Creado:{' '}
              {data?.character?.created &&
                new Date(data?.character?.created).toLocaleString()}
            </p>
          </div>
          <div className="col-auto px-0 text-white ms-5 mt-5">
            <p>Location Type: {data?.character?.location?.type}</p>
            <p>Location name: {data?.character?.location?.name}</p>
            <p>Dimension: {data?.character?.origin?.dimension}</p>
            <p>Origin: {data?.character?.origin?.name}</p>
            <p>Origin Type: {data?.character?.origin?.type}</p>
          </div>
        </div>
      </div>
      <div className="container px-0 mt-4 mb-5">
        <table class="table table-striped table-hover shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Episode</th>
              <th scope="col">Name</th>
              <th scope="col">Air date</th>
              <th scope="col">Created at</th>
            </tr>
          </thead>
          <tbody>
            {data?.character?.episode?.map(
              ({ episode, name, created, air_date }, i) => (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{episode}</td>
                  <td>{name}</td>
                  <td>{air_date}</td>
                  <td>{new Date(created).toLocaleString('en-GB')}</td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Character;
