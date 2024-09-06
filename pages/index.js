import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Nav from '../components/nav'

const Home = () => {
  const [state, setState] = useState({
    query: '',
    shows: [],
    loading: false
  });

  let timer = null;

  const onChange = (e) => {
    setState(prevState => ({ ...prevState, [e.target.name]: e.target.value, loading: true, shows: []}));
    // debounce
    clearTimeout(timer);
    timer = setTimeout(() => {
      fetchData(state.query).then(result => {
        setState(prevState => ({ ...prevState, shows: result.shows, loading: false }));
      })
    }, 500);
  }

  const fetchData = async (query) => {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const result = await response.json();

    return {
      shows: result.slice(0, 4).map(entry => entry.show)
    };
  }


    return (<div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/static/favicon.ico' importance='low' />
      </Head>

      <Nav />

      <div className='hero'>
        <h1 className='title'>Welcome to Movie Guide</h1>
        <p className='description'>
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>
        <div className='row'>
          <div className='card'>
            <input type='text' name='query' placeholder='Search show' onChange={onChange} />
            <div className='hint'>e.g. search for batman</div>
          </div>
        </div>

        <div className='row'>
          {state.shows && state.shows.map(show => {
            return <div className='card' key={show.id}>
              <h3>{show.name}</h3>
              <div dangerouslySetInnerHTML={{ __html: show.summary }} />
                {/*TODO: add link to show detail page here*/}
                read more
            </div>
          })}
          {!state.loading && state.query && (!state.shows || !state.shows.length) && <div className='card err'>
            <p>no shows found</p>
          </div>}
          {state.loading && <div className='card'>
            <img src="/static/loader.gif" alt="Loading..." />
            loading...
            </div>}
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
        .card input {
          width: 100%;
        }
        .card.err p {
          color: #f00;
        }
        a {
          color: #067df7;
        }
        .hint {
          opacity: 0.5;
          font-size: 0.7em;
        }
        img {
          vertical-align: middle;
          margin-right: 0.5rem;
        }
      `}</style>
    </div>
  );
}


export default Home
